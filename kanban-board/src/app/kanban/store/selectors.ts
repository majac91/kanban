import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KanbanState } from './state';
import { Task } from '../interfaces/task.interface';
import { TaskStatus } from '../enums/task-status.enum';

export const selectKanbanState = createFeatureSelector<KanbanState>('kanban');

export const selectAllTasks = createSelector(
  selectKanbanState,
  (state: KanbanState) => state?.tasks || []
);

export const selectTasksByStatus = (status: TaskStatus) =>
  createSelector(
    selectAllTasks,
    (tasks: Task[]) => tasks.filter(task => task.status === status)
  );



