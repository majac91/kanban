import {Component, input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../interfaces/task.interface';
import { Store } from '@ngrx/store';
import * as KanbanActions from '../../store/actions';

@Component({
  selector: 'app-task-card',
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  task = input<Task>();

  constructor(private store: Store) {}

  deleteTask(): void {
    const taskToDelete = this.task();
    if (taskToDelete) {
      this.store.dispatch(KanbanActions.deleteTask({ taskId: taskToDelete.id }));
    }
  }
}
