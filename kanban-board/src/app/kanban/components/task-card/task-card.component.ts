import {Component, input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../interfaces/task.interface';
import { Store } from '@ngrx/store';
import * as KanbanActions from '../../store/actions';

@Component({
  selector: 'app-task-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  task = input<Task>();
  isEditing = false;
  editTitle = '';

  constructor(private store: Store) {}

  startEdit(): void {
    const currentTask = this.task();
    if (currentTask) {
      this.isEditing = true;
      this.editTitle = currentTask.title;
    }
  }

  saveEdit(): void {
    const currentTask = this.task();
    if (currentTask && this.editTitle.trim()) {
      this.store.dispatch(KanbanActions.updateTask({
        taskId: currentTask.id,
        title: this.editTitle.trim()
      }));
      this.isEditing = false;
    }
  }

  cancelEdit(): void {
    this.isEditing = false;
  }

  deleteTask(): void {
    const taskToDelete = this.task();
    if (taskToDelete) {
      this.store.dispatch(KanbanActions.deleteTask({ taskId: taskToDelete.id }));
    }
  }
}
