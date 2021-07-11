import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  authUser(user: any) {
    let UsersArr = [];
    if (localStorage.getItem('Users')) {
      UsersArr = JSON.parse(localStorage.getItem('Users'));
    }
    return UsersArr.find(
      (p) => p.userName == user.userName && p.password == user.password
    );
  }
}
