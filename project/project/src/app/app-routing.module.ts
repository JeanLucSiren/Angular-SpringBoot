// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskComponent } from './task/task.component';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';

const routes: Routes = [
  { path: '', component: TaskComponent },
  { path: 'add-task', component: AddTaskFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
