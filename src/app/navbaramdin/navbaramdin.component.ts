import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIcons } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbaramdin',
  templateUrl: './navbaramdin.component.html',
  styleUrls: ['./navbaramdin.component.css'],
})
export class NavbaramdinComponent {
  logout() {
    window.location.href = 'http://localhost:4200/';
  }
  clickwaiter() {
    window.location.href = 'http://localhost:4200/waiterlist';
  }
  clikdrinks() {
    window.location.href = 'http://localhost:4200/drinklist';
  }
  historyadmin() {
    window.location.href = 'http://localhost:4200/waiterhistoryadmin';
  }
}
