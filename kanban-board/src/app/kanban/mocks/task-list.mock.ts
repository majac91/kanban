import { Task } from '../interfaces/task.interface';
import { TaskStatus } from '../enums/task-status.enum';
import { TaskPriority } from '../enums/task-priority.enum';

export const MOCK_TASKS: Task[] = [
  {
    id: '1',
    title: 'Setup Angular project with NgRx',
    status: TaskStatus.DONE,
    priority: TaskPriority.HIGH,
    loadingPriority: false
  },
  {
    id: '2',
    title: 'Configure NgRx store and actions',
    status: TaskStatus.DONE,
    priority: TaskPriority.HIGH,
    loadingPriority: false
  },
  {
    id: '3',
    title: 'Create Kanban board layout',
    status: TaskStatus.DONE,
    priority: TaskPriority.MEDIUM,
    loadingPriority: false
  },
  {
    id: '4',
    title: 'Implement task card component',
    status: TaskStatus.IN_PROGRESS,
    priority: TaskPriority.MEDIUM,
    loadingPriority: false
  },
  {
    id: '5',
    title: 'Add drag and drop functionality',
    status: TaskStatus.IN_PROGRESS,
    loadingPriority: true
  },
  {
    id: '6',
    title: 'Style components with SCSS',
    status: TaskStatus.IN_PROGRESS,
    priority: TaskPriority.LOW,
    loadingPriority: false
  },
  {
    id: '7',
    title: 'Integrate AI priority service',
    status: TaskStatus.TODO,
    loadingPriority: true
  },
  {
    id: '8',
    title: 'Implement CRUD operations',
    status: TaskStatus.TODO,
    priority: TaskPriority.HIGH,
    loadingPriority: false
  },
  {
    id: '9',
    title: 'Add inline editing for tasks',
    status: TaskStatus.TODO,
    priority: TaskPriority.MEDIUM,
    loadingPriority: false
  },
  {
    id: '10',
    title: 'Write unit tests for reducer',
    status: TaskStatus.TODO,
    loadingPriority: false,
    errorPriority: 'Failed to fetch priority'
  },
  {
    id: '11',
    title: 'Write unit tests for selectors',
    status: TaskStatus.TODO,
    priority: TaskPriority.LOW,
    loadingPriority: false
  },
  {
    id: '12',
    title: 'Add error handling for AI service',
    status: TaskStatus.TODO,
    loadingPriority: false,
    errorPriority: 'Service unavailable'
  },
  {
    id: '13',
    title: 'Performance optimization',
    status: TaskStatus.TODO,
    priority: TaskPriority.LOW,
    loadingPriority: false
  },
  {
    id: '14',
    title: 'Create documentation',
    status: TaskStatus.TODO,
    priority: TaskPriority.LOW,
    loadingPriority: false
  }
];
