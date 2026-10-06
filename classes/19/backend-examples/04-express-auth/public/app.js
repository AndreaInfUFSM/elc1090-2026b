const loginPanel = document.querySelector("#login-panel");
const appPanel = document.querySelector("#app-panel");
const loginForm = document.querySelector("#login-form");
const taskForm = document.querySelector("#task-form");
const tasksEl = document.querySelector("#tasks");
const statusEl = document.querySelector("#status");
const identityEl = document.querySelector("#identity");
const roleEl = document.querySelector("#role");

async function api(path, options = {}) {
  const response = await fetch(path, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options
  });

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(`${response.status}: ${body.error || response.statusText}`);
  }

  if (response.status === 204) return null;
  return response.json();
}

function showLoggedOut() {
  loginPanel.hidden = false;
  appPanel.hidden = true;
}

async function showLoggedIn(user) {
  loginPanel.hidden = true;
  appPanel.hidden = false;
  identityEl.textContent = user.email;
  roleEl.textContent = `role = ${user.role}`;
  await loadTasks();
}

async function loadTasks() {
  const tasks = await api("/api/tasks");
  tasksEl.replaceChildren();

  for (const task of tasks) {
    const li = document.createElement("li");
    const title = document.createElement("span");
    const remove = document.createElement("button");
    title.textContent = `${task.id}. ${task.title}`;
    remove.textContent = "Excluir (admin)";
    remove.className = "danger";

    remove.addEventListener("click", async () => {
      try {
        await api(`/api/tasks/${task.id}`, { method: "DELETE" });
        statusEl.textContent = "Tarefa excluída.";
        await loadTasks();
      } catch (error) {
        statusEl.textContent = error.message;
      }
    });

    li.append(title, remove);
    tasksEl.append(li);
  }
}

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const user = await api("/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: loginForm.email.value,
        password: loginForm.password.value
      })
    });
    statusEl.textContent = "";
    await showLoggedIn(user);
  } catch (error) {
    alert(error.message);
  }
});

taskForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    await api("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title: taskForm.title.value })
    });
    taskForm.reset();
    await loadTasks();
  } catch (error) {
    statusEl.textContent = error.message;
  }
});

document.querySelector("#logout").addEventListener("click", async () => {
  await api("/api/logout", { method: "POST" });
  showLoggedOut();
});

(async () => {
  try {
    const user = await api("/api/me");
    await showLoggedIn(user);
  } catch {
    showLoggedOut();
  }
})();
