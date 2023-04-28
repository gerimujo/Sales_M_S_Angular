import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  gotoadmin() {
    window.location.href = 'http://localhost:4200/loginadmin';
  }
  gotowaiter() {
    window.location.href = 'http://localhost:4200/loginwaiter';
  }
}
