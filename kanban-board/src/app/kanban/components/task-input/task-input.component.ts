import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as KanbanActions from '../../store/actions';

@Component({
  selector: 'app-task-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.scss'
})
export class TaskInputComponent {
  taskTitle: string = '';

  constructor(private store: Store) {}

  addTask(): void {
    if (this.taskTitle.trim()) {
      const id = crypto.randomUUID();
      this.store.dispatch(KanbanActions.addTask({ title: this.taskTitle, id }));
      this.store.dispatch(KanbanActions.fetchPriority({ taskId: id }));
      this.taskTitle = '';
    }
  }
}
