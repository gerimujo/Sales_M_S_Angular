import { Component } from '@angular/core';

@Component({
  selector: 'app-navbarwaiter',
  templateUrl: './navbarwaiter.component.html',
  styleUrls: ['./navbarwaiter.component.css'],
})
export class NavbarwaiterComponent {
  neworder() {
    window.location.href = 'http://localhost:4200/homewaiter';
  }
  logout() {
    window.location.href = 'http://localhost:4200/';
  }
  history() {
    window.location.href = 'http://localhost:4200/orderswaiter/';
  }
}
