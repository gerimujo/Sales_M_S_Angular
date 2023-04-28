import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-waiterlisthistory',
  templateUrl: './waiterlisthistory.component.html',
  styleUrls: ['./waiterlisthistory.component.css'],
})
export class WaiterlisthistoryComponent {
  constructor(private http: HttpClient) {}
  getdata() {
    this.http
      .get('http://localhost:8080/rest/getwaitershistory')
      .subscribe((response: any) => {
        this.waiters = response;
      });
  }

  ngOnInit() {
    this.getdata();
  }
  public waiters: String[] = [];

  send(nam: String) {
    const body = [{ id: 0, name: nam, password: '' }];
    this.http
      .put('http://localhost:8080/rest/openwaiterhistory', body)
      .subscribe((response: any) => {
        if (response.length > 0) {
          console.log('done');
          window.location.href = 'http://localhost:4200/waiterdaylistadmin';
        }
      });
  }
}
