import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIcons } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbaramdin',
  templateUrl: './navbaramdin.component.html',
  styleUrls: ['./navbaramdin.component.css'],
})
export class NavbaramdinComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}
  logout() {
    window.location.href = 'http://localhost:4200/';
  }
  userId: String | null = null;

  clickwaiter() {
    this.userId = this.route.snapshot.paramMap.get('userId');

    this.router.navigate([`/waiterlist/${1}`]);
  }
  clikdrinks() {
    this.userId = this.route.snapshot.paramMap.get('userId');

    this.router.navigate([`/drinklist/${1}`]);
  }
  historyadmin() {
    this.userId = this.route.snapshot.paramMap.get('userId');

    this.router.navigate([`/waiterhistoryadmin/${1}`]);
  }
}
