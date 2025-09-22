import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.scss'
})
export class TaskInputComponent {
  taskTitle: string = '';

  addTask(): void {}
}
