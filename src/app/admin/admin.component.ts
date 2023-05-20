import { Component } from '@angular/core';
import { DoBootstrap } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(private http: HttpClient, private router: Router) {}
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
      .subscribe((response: any) => {
        console.log(response);
        if (response === 'Data is not correct') {
          this.Error = response;
        } else {
          this.router.navigate([`/waiterlist/${response}`]);
        }
      });
    console.log(this.usrname + '  ' + this.password);
  }
}
