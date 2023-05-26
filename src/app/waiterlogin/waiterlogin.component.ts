import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-waiterlogin',
  templateUrl: './waiterlogin.component.html',
  styleUrls: ['./waiterlogin.component.css'],
})
export class WaiterloginComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookie: CookieService
  ) {}
  goback() {
    this.router.navigate([``]);
  }
  public usrname = '';
  public password = '';
  public Error = '';
  click() {
    const body = { id: 0, name: this.usrname, password: this.password };
    this.http
      .post('http://localhost:8080/rest/loginwaiter', body)
      .pipe(
        catchError((error: HttpErrorResponse): Observable<any> => {
          //  console.error('An error occurred:', error.message);

          return throwError((this.Error = 'Data is not correct'));
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        this.cookie.set('waiter', response.token);
        console.log(response.token);
        this.router.navigate([`/homewaiter/${response.id}`]);
      });
    console.log(this.usrname + '  ' + this.password);
  }
}
