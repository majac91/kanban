import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TaskPriority } from '../enums/task-priority.enum';
import { Task } from '../interfaces/task.interface';
import { MOCK_TASKS } from '../mocks/task-list.mock';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(MOCK_TASKS).pipe(delay(100));
  }

  getTaskPriority(taskId: string): Observable<TaskPriority> {
    const priorities: TaskPriority[] = [TaskPriority.HIGH, TaskPriority.MEDIUM, TaskPriority.LOW];
    const randomPriority = priorities[Math.floor(Math.random() * priorities.length)];

    return of(randomPriority).pipe(delay(500));
  }
}
