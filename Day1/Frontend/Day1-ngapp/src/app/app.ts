import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './student/student';
import { About } from './about/about';

@Component({
  selector: 'app-root', 
  imports: [RouterOutlet, Student, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Day1-ngapp');
}
