import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbarwaiter',
  templateUrl: './navbarwaiter.component.html',
  styleUrls: ['./navbarwaiter.component.css'],
})
export class NavbarwaiterComponent {
  constructor(private route: ActivatedRoute) {}
  userId: String | null = null;

  neworder() {
    this.userId = this.route.snapshot.paramMap.get('userId');

    window.location.href = `http://localhost:4200/homewaiter/${this.userId}`;
  }
  logout() {
    window.location.href = 'http://localhost:4200/';
  }
  history() {
    this.userId = this.route.snapshot.paramMap.get('userId');

    window.location.href = `http://localhost:4200/orderswaiter/${this.userId}`;
  }
}
