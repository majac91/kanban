import { TaskStatus } from '../enums/task-status.enum';
import { TaskPriority } from '../enums/task-priority.enum';

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  priority?: TaskPriority;
  loadingPriority: boolean;
  errorPriority?: string;
}
