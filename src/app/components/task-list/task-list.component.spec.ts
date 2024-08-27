import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';
import { TaskService } from '../../services/task.service';
import { of } from 'rxjs';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let taskService: TaskService;

  beforeEach(async () => {TestBed.configureTestingModule({
    imports: [TaskListComponent],
    providers: [
      {
        provide: TaskService,
        useValue: {
          getTasks: () => of([{ id: 1, title: 'Test Task 1', completed: false }])
        }
      }
    ]
  });
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    taskService = TestBed.inject(TaskService);
  });

  it('should load tasks on initialization', () => {
    fixture.detectChanges();  // Trigger ngOnInit
    expect(component.tasks.length).toBe(1);
    expect(component.tasks[0].title).toBe('Test Task 1');
  });
});
