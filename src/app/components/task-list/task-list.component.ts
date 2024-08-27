import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  // tasks = [
  //   { id: 1, title: 'Task 1', completed: false },
  //   { id: 2, title: 'Task 2', completed: true }
  // ];

  tasks: Task[] = [];
  filteredTasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      this.filteredTasks = tasks;
    });
  }

  filterTasks(status: string): void {
    if (status === 'all') {
      this.filteredTasks = this.tasks;
    } else {
      const isCompleted = status === 'completed';
      this.filteredTasks = this.tasks.filter(task => task.completed === isCompleted);
    }
  }

  completeTask(task: Task): void {
    task.completed = true;
    this.taskService.updateTask(task.id, task).subscribe(() => {
      this.loadTasks();
    });
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }

}
