import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CapitalPipe } from '../Pipes/capital-pipe';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [FormsModule, CapitalPipe],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  // Interpolation
  name = 'Shivam';
  age = 22;
  
    // Property Binding
  imageUrl = 'https://via.placeholder.com/150';


    // Event Binding
  count = 0;

 increaseCount() {
    this.count++;
  }

    // Two-way Binding
  username = '';
  // @if
  isLoggedIn = true;

  // @for
  students = [
    { id: 1, name: 'Shivam', active: true },
    { id: 2, name: 'Rahul', active: false },
    { id: 3, name: 'Amit', active: true }
  ];
 // @switch
  role = 'admin';

  // Class Binding
  isActive = true;

  // Style Binding
  textColor = 'blue';
  //pipe

  word= " i love my country";

}
