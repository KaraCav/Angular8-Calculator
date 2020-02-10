import { Component } from '@angular/core';
import { CalculatorComponent } from './calculator/calculator.component';
import { NotesComponent } from './financial-notes/notes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular8-Practice';
}
