package com.example.task_backend.controller;

import com.example.task_backend.model.Task;
import com.example.task_backend.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/tasks")
public class TaskController {
    private final TaskService service;

    public TaskController(TaskService service) {
        this.service = service;
    }

    @GetMapping
    public List<Task> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Task getById(@PathVariable Long id) {
        return service.findById(id).orElseThrow();
    }

    @PostMapping
    public Task create(@RequestBody Task task) {
        return service.save(task);
    }

    @PutMapping("/{id}")
    public Task update(@PathVariable Long id, @RequestBody Task updatedTask) {
        Task existing = service.findById(id).orElseThrow();
        existing.setTitle(updatedTask.getTitle());
        existing.setCompleted(updatedTask.getCompleted());
        return service.save(existing);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @PatchMapping("/{id}/completed")
    public Task changeCompleted(@PathVariable Long id, @RequestBody Boolean completed) {
        return service.changeCompleted(id, completed).orElseThrow();
    }
}
