import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TaskInputComponent } from '../task-input/task-input.component';

@Component({
  selector: 'app-board',
  imports: [CommonModule, TaskCardComponent, TaskInputComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

}