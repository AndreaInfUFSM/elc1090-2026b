package br.ufsm.elc1090.backend;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class TaskController {
    private final List<Task> tasks = new ArrayList<>(List.of(
        new Task(1, "Observar a requisição no DevTools"),
        new Task(2, "Trocar o backend sem trocar o frontend")
    ));
    private final AtomicLong nextId = new AtomicLong(3);

    record Task(long id, String title) {}
    record TaskInput(String title) {}

    @GetMapping("/health")
    Map<String, Object> health() {
        return Map.of("backend", "spring", "ok", true);
    }

    @GetMapping("/tasks")
    List<Task> listTasks() {
        return tasks;
    }

    @PostMapping("/tasks")
    ResponseEntity<?> createTask(@RequestBody TaskInput input) {
        String title = input.title() == null ? "" : input.title().trim();
        if (title.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("error", "title is required"));
        }

        Task task = new Task(nextId.getAndIncrement(), title);
        tasks.add(task);
        return ResponseEntity.status(HttpStatus.CREATED).body(task);
    }

    @DeleteMapping("/tasks/{id}")
    ResponseEntity<?> deleteTask(@PathVariable long id) {
        boolean removed = tasks.removeIf(task -> task.id() == id);
        return removed
            ? ResponseEntity.noContent().build()
            : ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", "task not found"));
    }
}
