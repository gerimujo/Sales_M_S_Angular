import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-waiterlogin',
  templateUrl: './waiterlogin.component.html',
  styleUrls: ['./waiterlogin.component.css'],
})
export class WaiterloginComponent {
  constructor(private http: HttpClient) {}
  goback() {
    window.location.href = 'http://localhost:4200/';
  }
  public usrname = '';
  public password = '';
  public Error = '';
  click() {
    const body = { id: 0, name: this.usrname, password: this.password };
    this.http
      .put('http://localhost:8080/rest/loginwaiter', body)
      .pipe(
        catchError((error: any) => {
          console.error(error);
          this.Error = 'Data is not correct';
          return throwError('An error occurred while logging in.');
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        if (response[0] === 'Ok') {
          window.location.href = 'http://localhost:4200/homewaiter';
        } else {
          this.Error = response[0];
        }
      });
    console.log(this.usrname + '  ' + this.password);
  }
}
