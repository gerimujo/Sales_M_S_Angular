import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIcons } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbaramdin',
  templateUrl: './navbaramdin.component.html',
  styleUrls: ['./navbaramdin.component.css'],
})
export class NavbaramdinComponent {
  constructor(private route: ActivatedRoute) {}
  logout() {
    window.location.href = 'http://localhost:4200/';
  }
  userId: String | null = null;

  clickwaiter() {
    this.userId = this.route.snapshot.paramMap.get('userId');

    window.location.href = `http://localhost:4200/waiterlist/${1}`;
  }
  clikdrinks() {
    this.userId = this.route.snapshot.paramMap.get('userId');
    window.location.href = `http://localhost:4200/drinklist/${1}`;
  }
  historyadmin() {
    this.userId = this.route.snapshot.paramMap.get('userId');

    window.location.href = `http://localhost:4200/waiterhistoryadmin/${1}`;
  }
}
