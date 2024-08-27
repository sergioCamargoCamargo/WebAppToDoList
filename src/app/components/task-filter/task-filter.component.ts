import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  standalone: true,
  imports: [],
  templateUrl: './task-filter.component.html',
  styleUrl: './task-filter.component.css'
})
export class TaskFilterComponent {
// Aquí irá la lógica para filtrar las tareas
@Output() filterChanged = new EventEmitter<string>();

  filterTasks(status: string): void {
    this.filterChanged.emit(status);
  }
}
