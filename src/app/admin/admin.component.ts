import { Component } from '@angular/core';
import { DoBootstrap } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(private http: HttpClient) {}
  goback() {
    window.location.href = 'http://localhost:4200/';
  }
  public usrname = '';
  public password = '';
  public Error = '';
  click() {
    const body = { id: 0, user: this.usrname, password: this.password };
    this.http
      .post('http://localhost:8080/rest/loginadmin', body)
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
          window.location.href = 'http://localhost:4200/waiterlist';
        } else {
          this.Error = response[0];
        }
      });
    console.log(this.usrname + '  ' + this.password);
  }
}
