import {Component, input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-card',
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  task = input<Task>();
}
