import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hover } from '../Directive/hover';




@Component({
  selector: 'app-about',
  imports: [FormsModule,NgClass,Hover],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
//----------------------------------------------------------------------------
// interpolation

  name = "Shivam"
  address= "Pune"
//----------------------------------------------------------------------------
// property binding

imageurl="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="


//----------------------------------------------------------------------------
//event binding

event1(){
  alert("invalid!!!!!!!!!!!!!!!" + this.name)
}
//----------------------------------------------------------------------------
//Two way data binding

Email="";

//----------------------------------------------------------------------------
//Directive
// 1.Attribute Directive=    a. ngclass   b. ngstyle
// 1.Structural Directive=   a. @if       b. @for


isActive=false;


}
