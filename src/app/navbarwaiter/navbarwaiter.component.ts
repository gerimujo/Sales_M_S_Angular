import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbarwaiter',
  templateUrl: './navbarwaiter.component.html',
  styleUrls: ['./navbarwaiter.component.css'],
})
export class NavbarwaiterComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}
  userId: String | null = null;

  neworder() {
    this.userId = this.route.snapshot.paramMap.get('userId');

    // window.location.href = `http://localhost:4200/homewaiter/${this.userId}`;
    this.router.navigate([`/homewaiter/${this.userId}`]);
  }
  logout() {
    this.router.navigate(['']);
  }
  history() {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.router.navigate([`/orderswaiter/${this.userId}`]);
  }
}
