import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails implements OnInit {
userId = " ";
constructor(private route: ActivatedRoute){}

ngOnInit(): void {

  this.userId=this.route.snapshot.paramMap.get('id')||'';
  console.log(this.userId);
}

}
