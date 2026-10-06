import express from "express";
import session from "express-session";
import bcrypt from "bcryptjs";

const app = express();
const port = 8080;

app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || "demo-only-change-me",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: "lax",
    secure: false,          // localhost demo uses HTTP
    maxAge: 1000 * 60 * 30
  }
}));
app.use(express.static("public"));

const users = [
  {
    id: 1,
    email: "ana@example.com",
    role: "user",
    passwordHash: bcrypt.hashSync("ana12345", 10)
  },
  {
    id: 2,
    email: "admin@example.com",
    role: "admin",
    passwordHash: bcrypt.hashSync("admin12345", 10)
  }
];

let nextId = 3;
let tasks = [
  { id: 1, title: "Esta tarefa pode ser vista por usuários autenticados" },
  { id: 2, title: "A exclusão abaixo exige papel admin" }
];

function requireAuth(req, res, next) {
  if (!req.session.user) return res.status(401).json({ error: "authentication required" });
  next();
}

function requireRole(role) {
  return (req, res, next) => {
    if (req.session.user?.role !== role) {
      return res.status(403).json({ error: `${role} role required` });
    }
    next();
  };
}

app.get("/api/health", (_req, res) => res.json({ backend: "express-auth", ok: true }));

app.post("/api/login", async (req, res) => {
  const email = String(req.body?.email ?? "").trim().toLowerCase();
  const password = String(req.body?.password ?? "");

  const user = users.find(item => item.email === email);
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return res.status(401).json({ error: "invalid credentials" });
  }

  req.session.user = { id: user.id, email: user.email, role: user.role };
  res.json(req.session.user);
});

app.post("/api/logout", (req, res) => {
  req.session.destroy(() => res.status(204).end());
});

app.get("/api/me", requireAuth, (req, res) => {
  res.json(req.session.user);
});

app.get("/api/tasks", requireAuth, (_req, res) => {
  res.json(tasks);
});

app.post("/api/tasks", requireAuth, (req, res) => {
  const title = String(req.body?.title ?? "").trim();
  if (!title) return res.status(400).json({ error: "title is required" });

  const task = { id: nextId++, title };
  tasks.push(task);
  res.status(201).json(task);
});

app.delete("/api/tasks/:id", requireAuth, requireRole("admin"), (req, res) => {
  const id = Number(req.params.id);
  const before = tasks.length;
  tasks = tasks.filter(task => task.id !== id);

  if (tasks.length === before) return res.status(404).json({ error: "task not found" });
  res.status(204).end();
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Express Auth listening on http://0.0.0.0:${port}`);
});
