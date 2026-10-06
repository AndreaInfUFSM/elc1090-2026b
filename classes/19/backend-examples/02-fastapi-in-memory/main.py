from pathlib import Path
from fastapi import FastAPI, HTTPException, Response
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

app = FastAPI()
tasks = [
    {"id": 1, "title": "Observar a requisição no DevTools"},
    {"id": 2, "title": "Trocar o backend sem trocar o frontend"},
]
next_id = 3

class TaskInput(BaseModel):
    title: str

@app.get("/api/health")
def health():
    return {"backend": "fastapi", "ok": True}

@app.get("/api/tasks")
def list_tasks():
    return tasks

@app.post("/api/tasks", status_code=201)
def create_task(payload: TaskInput):
    global next_id
    title = payload.title.strip()
    if not title:
        raise HTTPException(status_code=400, detail="title is required")

    task = {"id": next_id, "title": title}
    next_id += 1
    tasks.append(task)
    return task

@app.delete("/api/tasks/{task_id}", status_code=204)
def delete_task(task_id: int):
    for index, task in enumerate(tasks):
        if task["id"] == task_id:
            tasks.pop(index)
            return Response(status_code=204)
    raise HTTPException(status_code=404, detail="task not found")

app.mount("/", StaticFiles(directory=Path(__file__).parent / "static", html=True), name="static")
