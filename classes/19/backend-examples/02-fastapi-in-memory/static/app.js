const tasksEl = document.querySelector("#tasks");
const statusEl = document.querySelector("#status");
const form = document.querySelector("#task-form");
const reloadButton = document.querySelector("#reload");

async function api(path, options = {}) {
  const response = await fetch(path, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`${response.status}: ${message}`);
  }

  if (response.status === 204) return null;
  return response.json();
}

function render(tasks) {
  tasksEl.replaceChildren();

  for (const task of tasks) {
    const li = document.createElement("li");
    const title = document.createElement("span");
    const remove = document.createElement("button");

    title.textContent = `${task.id}. ${task.title}`;
    remove.textContent = "Excluir";
    remove.className = "danger";
    remove.addEventListener("click", async () => {
      try {
        await api(`/api/tasks/${task.id}`, { method: "DELETE" });
        await loadTasks();
      } catch (error) {
        statusEl.textContent = error.message;
      }
    });

    li.append(title, remove);
    tasksEl.append(li);
  }
}

async function loadTasks() {
  statusEl.textContent = "Carregando...";
  try {
    const tasks = await api("/api/tasks");
    render(tasks);
    statusEl.textContent = `Backend respondeu com ${tasks.length} tarefa(s).`;
  } catch (error) {
    statusEl.textContent = error.message;
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const title = form.title.value.trim();
  if (!title) return;

  try {
    await api("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title })
    });
    form.reset();
    await loadTasks();
  } catch (error) {
    statusEl.textContent = error.message;
  }
});

reloadButton.addEventListener("click", loadTasks);
loadTasks();
