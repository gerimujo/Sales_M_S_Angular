import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-waiterlisthistory',
  templateUrl: './waiterlisthistory.component.html',
  styleUrls: ['./waiterlisthistory.component.css'],
})
export class WaiterlisthistoryComponent {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  userId: String | null = null;

  getdata() {
    this.userId = this.route.snapshot.paramMap.get('userId');

    this.http
      .get(`http://localhost:8080/rest/getwaitershistory/${this.userId}`)
      .subscribe((response: any) => {
        console.log(response);
        if (response[0] == 'No') {
          window.location.href = 'http://localhost:4200/';
        } else {
          this.waiters = response;
        }
      });
  }

  ngOnInit() {
    this.getdata();
  }
  public waiters: String[] = [];

  send(nam: String) {
    const body = { id: 0, name: nam, password: '' };
    console.log(nam);
    this.http
      .post('http://localhost:8080/rest/openwaiterhistory', body)
      .subscribe((response: any) => {
        if (response.length > 0) {
          console.log(response);
          console.log('done');
          window.location.href = `http://localhost:4200/waiterdaylistadmin/${nam}`;
        }
      });
  }
}
