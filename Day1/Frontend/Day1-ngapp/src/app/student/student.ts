import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  imports: [FormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {

  StudentName = "";
  StudentRoll = 0;

  students = [
    {
      StudentName: "Shivam Dhawale",
      StudentRoll: 1
    },
    {
      StudentName: "Omkar Pisal",
      StudentRoll: 2
    },
    {
      StudentName: "Mahesh patil",
      StudentRoll: 3
    },
    {
      StudentName: "Omkar jadhav",
      StudentRoll: 4
    },
    {
      StudentName: "Prathm desai",
      StudentRoll: 5
    }
  ];

  addstudent() {

    this.students.push({
      StudentName: this.StudentName,
      StudentRoll: this.StudentRoll
    });

    this.StudentName = "";
    this.StudentRoll = 0;
  }
}