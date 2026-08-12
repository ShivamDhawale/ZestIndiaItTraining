import { ChangeDetectorRef,Component,OnInit } from '@angular/core';
import { User,UserService } from '../services/user';
@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit {
users: User[]=[];
constructor(private userService : UserService
  , private cdr: ChangeDetectorRef
) {}
ngOnInit(): void {

    console.log('Employees component loaded');

    this.userService.getUsers().subscribe({

      next: (data) => {

        console.log('API DATA:', data);

        this.users = data;

        console.log('Employees:', this.users);

        this.cdr.markForCheck();
      },

      error: (error) => {
        console.error('API ERROR:', error);
      }

    });

  }
}
