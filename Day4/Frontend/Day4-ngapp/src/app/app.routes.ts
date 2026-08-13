import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Users } from './users/users';
import { UserDetails } from './user-details/user-details';
import { Admin } from './admin/admin';
import { UserList } from './users/user-list/user-list';
import { UserInfo } from './users/user-info/user-info';
import { authGuard } from './auth-guard';

export const routes: Routes = [  {
    path: '',
    component: Home
  },
  {
    path: 'users',
  component: Users,
  children: [
    {
      path: 'list',
      component: UserList
    },
    {
      path: 'details',
      component: UserInfo
    }
  ]
  },
  {
    path: 'users/:id',
    component: UserDetails
  },
  {
  path: 'admin',
  canActivate: [authGuard],
  loadComponent: () =>
    import('./admin/admin').then(m => m.Admin)
}];
