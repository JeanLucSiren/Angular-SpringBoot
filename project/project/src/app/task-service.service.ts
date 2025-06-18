import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task/task'; // Ensure this path is correct based on your project structure

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  readonly baseUrl = 'http://localhost:8080/tasks';
  constructor(private http: HttpClient) {}

  sendPost(data: any) {
    return this.http.post( `${this.baseUrl}`, data);
  }

  getTasks() {
    return this.http.get<Task[]>(`${this.baseUrl}`);
  }

  deleteTask(taskId: number) {
    console.log(`Deleting task with ID: ${taskId}`);
    return this.http.delete(`${this.baseUrl}/${taskId}`);
  }

  addTask(task: Task) {
    return this.http.post<Task>(`${this.baseUrl}`, task);
  }
}
