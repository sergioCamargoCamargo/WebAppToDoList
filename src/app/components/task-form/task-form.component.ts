import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
// Aquí irá la lógica para manejar el formulario de tareas
task: Task = { id: 0, title: '', completed: false };
  @Output() taskCreated = new EventEmitter<void>();

  constructor(private taskService: TaskService) {}

  saveTask(): void {
    if (this.task.id) {
      this.taskService.updateTask(this.task.id, this.task).subscribe(() => {
        this.taskCreated.emit();
        this.resetForm();
      });
    } else {
      this.taskService.createTask(this.task).subscribe(() => {
        this.taskCreated.emit();
        this.resetForm();
      });
    }
  }

  resetForm(): void {
    this.task = { id: 0, title: '', completed: false };
  }
}
