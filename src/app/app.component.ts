import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskFilterComponent } from './components/task-filter/task-filter.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            HttpClientModule,  // Asegúrate de incluir HttpClientModule
            TaskListComponent,
            TaskFormComponent,
            TaskFilterComponent
            ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WebAppToDoList';
  @ViewChild('taskList') taskList!: TaskListComponent;

  filterTasks(status: string): void {
    this.taskList.filterTasks(status);
  }

  loadTasks(): void {
    this.taskList.loadTasks();
  }
}
