import { Component, Signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TaskInputComponent } from '../task-input/task-input.component';
import { Task } from '../../interfaces/task.interface';
import { TaskStatus } from '../../enums/task-status.enum';
import { Store } from '@ngrx/store';
import { selectTasksByStatus } from '../../store/selectors';
import { KanbanService } from '../../services/kanban.service';
import * as KanbanActions from '../../store/actions';

@Component({
  selector: 'app-board',
  imports: [CommonModule, TaskCardComponent, TaskInputComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit {
  todoTasks: Signal<Task[]>;
  inProgressTasks: Signal<Task[]>;
  doneTasks: Signal<Task[]>;

  constructor(
    private store: Store,
    private kanbanService: KanbanService
  ) {
    this.todoTasks = this.store.selectSignal(selectTasksByStatus(TaskStatus.TODO));
    this.inProgressTasks = this.store.selectSignal(selectTasksByStatus(TaskStatus.IN_PROGRESS));
    this.doneTasks = this.store.selectSignal(selectTasksByStatus(TaskStatus.DONE));
  }

  ngOnInit(): void {
    this.kanbanService.getTasks().subscribe(tasks => {
      this.store.dispatch(KanbanActions.loadMockTasks({ tasks }));
    });
  }
}
