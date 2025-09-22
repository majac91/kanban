import { Component } from '@angular/core';
import {BoardComponent} from './kanban/components/board/board.component';

@Component({
  selector: 'app-root',
  imports: [BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
