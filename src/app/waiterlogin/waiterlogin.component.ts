import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-waiterlogin',
  templateUrl: './waiterlogin.component.html',
  styleUrls: ['./waiterlogin.component.css'],
})
export class WaiterloginComponent {
  constructor(private http: HttpClient, private router: Router) {}
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
      .subscribe((response: any) => {
        console.log(response);
        if (response === 'Data is not correct') {
          this.Error = response;
        } else {
          this.router.navigate([`/homewaiter/${response}`]);
        }
      });
    console.log(this.usrname + '  ' + this.password);
  }
}
