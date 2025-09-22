import { createAction, props } from '@ngrx/store';
import { TaskStatus } from '../enums/task-status.enum';
import { TaskPriority } from '../enums/task-priority.enum';
import { Task } from '../interfaces/task.interface';

export const loadMockTasks = createAction(
  '[Kanban] Load Mock Tasks',
  props<{ tasks: Task[] }>()
);

export const addTask = createAction(
  '[Kanban] Add Task',
  props<{ title: string }>()
);

export const updateTask = createAction(
  '[Kanban] Update Task',
  props<{ taskId: string; title: string }>()
);

export const updateTaskStatus = createAction(
  '[Kanban] Update Task Status',
  props<{ taskId: string; status: TaskStatus }>()
);

export const deleteTask = createAction(
  '[Kanban] Delete Task',
  props<{ taskId: string }>()
);

export const fetchPriority = createAction(
  '[Kanban] Fetch Priority',
  props<{ taskId: string }>()
);

export const fetchPrioritySuccess = createAction(
  '[Kanban] Fetch Priority Success',
  props<{ taskId: string; priority: TaskPriority }>()
);

export const fetchPriorityFailure = createAction(
  '[Kanban] Fetch Priority Failure',
  props<{ taskId: string; error: string }>()
);
