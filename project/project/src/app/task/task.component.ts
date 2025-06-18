import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  showAddForm: boolean = false;

  constructor(private taskService: TaskServiceService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      next: (tasks) => this.tasks = tasks,
      error: () => console.log("Error fetching tasks")
    });
  }

  addTask(newTask: Task): void {
    this.taskService.addTask(newTask).subscribe({
      next: (savedTask) => {
        this.tasks.push(savedTask);
        this.showAddForm = false;
      },
      error: () => console.log('Error adding task')
    });
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId).subscribe({
      next: () => {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
      },
      error: () => console.log("Error deleting task")
    });
  }

  // Uncomment and implement updateTask in your service if you want to use this
  // toggleTaskCompletion(task: Task): void {
  //   const updatedTask = { ...task, completed: !task.completed };
  //   this.taskService.updateTask(updatedTask).subscribe({
  //     next: (updated) => {
  //       task.completed = updated.completed;
  //     },
  //     error: () => console.log("Error updating task")
  //   });
  // }
}