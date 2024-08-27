import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';
import { Task } from '../models/task';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created a task', () => {
    const newTask: Task = { id: 0, title: 'Test Task', completed: false };
    service.createTask(newTask).subscribe(task => {
      expect(task).toBeTruthy();
      expect(task.id).toBeGreaterThan(0);
      expect(task.title).toBe('Test Task');
    });
  });
});
