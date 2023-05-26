import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}
  ngOnInit() {
    this.delete();
  }
  delete() {
    this.cookieService.delete('admin', '/');
    this.cookieService.delete('waiter', '/');

    this.http
      .delete('http://localhost:8080/rest/deleteaccount')
      .subscribe((response: any) => {
        console.log(response);
      });
  }
  gotoadmin() {
    this.router.navigate([`/loginadmin/`]);
  }
  gotowaiter() {
    this.router.navigate([`/loginwaiter/`]);
  }
}
