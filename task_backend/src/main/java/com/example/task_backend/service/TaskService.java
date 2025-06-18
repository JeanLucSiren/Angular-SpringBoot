package com.example.task_backend.service;

import com.example.task_backend.model.Task;
import com.example.task_backend.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    private final TaskRepository repository;

    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    public List<Task> findAll() {
        return repository.findAll();
    }

    public Optional<Task> findById(Long id) {
        return repository.findById(id);
    }

    public Task save(Task task) {
        return repository.save(task);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    // Update full task (PUT)
    public Optional<Task> update(Long id, Task updatedTask) {
        return repository.findById(id).map(task -> {
            task.setTitle(updatedTask.getTitle());
            task.setCompleted(updatedTask.getCompleted());
            return repository.save(task);
        });
    }

    // Change only the completed field (PATCH)
    public Optional<Task> changeCompleted(Long id, Boolean completed) {
        return repository.findById(id).map(task -> {
            task.setCompleted(completed);
            return repository.save(task);
        });
    }
}
