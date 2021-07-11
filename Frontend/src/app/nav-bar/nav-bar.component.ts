import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private alertify: AlertifyService) {}
  loggedname: string;
  ngOnInit() {}
  loggedIn() {
    return (this.loggedname = localStorage.getItem('token'));
  }
  onLogOut() {
    localStorage.removeItem('token');
    this.alertify.success('Yoy are logged out !');
  }
}
