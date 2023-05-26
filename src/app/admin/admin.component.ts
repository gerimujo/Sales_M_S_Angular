import { Component } from '@angular/core';
import { DoBootstrap } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {}
  goback() {
    this.router.navigate([``]);
  }
  public usrname = '';
  public password = '';
  public Error = '';
  click() {
    const body = { id: 0, user: this.usrname, password: this.password };
    this.http
      .post('http://localhost:8080/rest/loginadmin', body)
      .pipe(
        catchError((error: HttpErrorResponse): Observable<any> => {
          //  console.error('An error occurred:', error.message);
          return throwError((this.Error = 'Data is not correct'));
        })
      )
      .subscribe((response: any) => {
        this.cookieService.set('admin', response.token);
        this.router.navigate([`/waiterlist/${response.id}`]);
      });
    console.log(this.usrname + '  ' + this.password);
  }
}
