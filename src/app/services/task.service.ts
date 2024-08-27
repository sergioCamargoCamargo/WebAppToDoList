import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private mockTasks: Task[] = [
    { id: 1, title: 'Mock Task 1', completed: false },
    { id: 2, title: 'Mock Task 2', completed: true },
    { id: 3, title: 'Mock Task 3', completed: false },
  ];

  constructor() {}

  getTasks(): Observable<Task[]> {
    return of(this.mockTasks);  // Devuelve las tareas simuladas
  }

  createTask(task: Task): Observable<Task> {
    task.id = this.mockTasks.length + 1;
    this.mockTasks.push(task);
    return of(task);  // Simula la creación de una tarea
  }

  updateTask(id: number, task: Task): Observable<Task> {
    const index = this.mockTasks.findIndex(t => t.id === id);
    if (index !== -1) {
      this.mockTasks[index] = task;
    }
    return of(task);  // Simula la actualización de una tarea
  }

  deleteTask(id: number): Observable<void> {
    this.mockTasks = this.mockTasks.filter(task => task.id !== id);
    return of();  // Simula la eliminación de una tarea
  }

  // private apiUrl = 'https://api.example.com/tasks';  // Reemplaza con la URL de tu API

  // constructor(private http: HttpClient) {}

  // // Obtener todas las tareas
  // getTasks(): Observable<Task[]> {
  //   return this.http.get<Task[]>(this.apiUrl);
  // }

  // // Crear una nueva tarea
  // createTask(task: Task): Observable<Task> {
  //   return this.http.post<Task>(this.apiUrl, task);
  // }

  // // Actualizar una tarea existente
  // updateTask(id: number, task: Task): Observable<Task> {
  //   return this.http.put<Task>(`${this.apiUrl}/${id}`, task);
  // }

  // // Eliminar una tarea
  // deleteTask(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }
}
