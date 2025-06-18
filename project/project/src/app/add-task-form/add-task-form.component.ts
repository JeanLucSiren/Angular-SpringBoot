import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../task/task';
import { Router } from '@angular/router';

import { TaskServiceService } from '../task-service.service';
@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent {

  // Form fields bound with ngModel
  title: string = '';
  completed: boolean = false;

  @Output() saveTask = new EventEmitter<Task>();

  constructor(private taskService: TaskServiceService, private router: Router) {}
  onSubmit(): void {
    console.log('Form submitted:', this.title, this.completed);
    if (this.title.trim()) {
      const newTask =   { // use timestamp as temporary ID
        title: this.title,
        completed: this.completed
      };
      this.addTask(newTask);

      // clear form
      this.title = '';
      this.completed = false;
    }
  }

    addTask(newTask: Task): void {
    this.taskService.addTask(newTask).subscribe({
      next: (savedTask) => {
         this.router.navigate(['']);  
      },
      error: () => console.log('Error adding task')
    });
  }
  
}
