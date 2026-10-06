import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const config = window.APP_CONFIG || {};
const configured =
  config.supabaseUrl &&
  config.supabasePublishableKey &&
  !config.supabaseUrl.includes("YOUR_");

const warning = document.querySelector("#config-warning");
const loginPanel = document.querySelector("#login-panel");
const appPanel = document.querySelector("#app-panel");
const loginForm = document.querySelector("#login-form");
const taskForm = document.querySelector("#task-form");
const tasksEl = document.querySelector("#tasks");
const statusEl = document.querySelector("#status");
const identityEl = document.querySelector("#identity");

if (!configured) {
  warning.hidden = false;
  loginPanel.hidden = true;
  throw new Error("Supabase is not configured. See .env.example and README.md.");
}

const supabase = createClient(config.supabaseUrl, config.supabasePublishableKey);

function showLoggedOut() {
  loginPanel.hidden = false;
  appPanel.hidden = true;
}

async function showLoggedIn(user) {
  loginPanel.hidden = true;
  appPanel.hidden = false;
  identityEl.textContent = user.email;
  await loadTasks();
}

async function loadTasks() {
  const { data, error } = await supabase
    .from("tasks")
    .select("id,title,user_id")
    .order("id");

  if (error) {
    statusEl.textContent = error.message;
    return;
  }

  tasksEl.replaceChildren();
  for (const task of data) {
    const li = document.createElement("li");
    const title = document.createElement("span");
    const remove = document.createElement("button");

    title.textContent = `${task.id}. ${task.title}`;
    remove.textContent = "Excluir";
    remove.className = "danger";
    remove.addEventListener("click", async () => {
      const { error } = await supabase.from("tasks").delete().eq("id", task.id);
      statusEl.textContent = error ? error.message : "Tarefa excluída.";
      if (!error) await loadTasks();
    });

    li.append(title, remove);
    tasksEl.append(li);
  }

  statusEl.textContent = `${data.length} tarefa(s) visível(is) para este usuário.`;
}

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: loginForm.email.value,
    password: loginForm.password.value
  });

  if (error) {
    alert(error.message);
    return;
  }

  await showLoggedIn(data.user);
});

taskForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return showLoggedOut();

  const { error } = await supabase
    .from("tasks")
    .insert({ title: taskForm.title.value.trim(), user_id: user.id });

  statusEl.textContent = error ? error.message : "Tarefa criada.";
  if (!error) {
    taskForm.reset();
    await loadTasks();
  }
});

document.querySelector("#logout").addEventListener("click", async () => {
  await supabase.auth.signOut();
  showLoggedOut();
});

const { data: { session } } = await supabase.auth.getSession();
if (session?.user) {
  await showLoggedIn(session.user);
} else {
  showLoggedOut();
}

supabase.auth.onAuthStateChange((_event, session) => {
  if (!session) showLoggedOut();
});
