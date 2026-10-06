import express from "express";

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.static("public"));

let nextId = 3;
let tasks = [
  { id: 1, title: "Observar a requisição no DevTools" },
  { id: 2, title: "Trocar o backend sem trocar o frontend" }
];

app.get("/api/health", (_req, res) => res.json({ backend: "express", ok: true }));

app.get("/api/tasks", (_req, res) => {
  res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
  const title = String(req.body?.title ?? "").trim();
  if (!title) return res.status(400).json({ error: "title is required" });

  const task = { id: nextId++, title };
  tasks.push(task);
  res.status(201).json(task);
});

app.delete("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const before = tasks.length;
  tasks = tasks.filter(task => task.id !== id);

  if (tasks.length === before) return res.status(404).json({ error: "task not found" });
  res.status(204).end();
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Express listening on http://0.0.0.0:${port}`);
});
