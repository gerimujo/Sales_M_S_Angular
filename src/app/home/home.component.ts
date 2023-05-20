import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.delete();
  }
  delete() {
    this.http
      .delete('http://localhost:8080/rest/deleteaccount')
      .subscribe((response: any) => {
        console.log(response);
      });
  }
  gotoadmin() {
    window.location.href = 'http://localhost:4200/loginadmin';
  }
  gotowaiter() {
    window.location.href = 'http://localhost:4200/loginwaiter';
  }
}
