import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-waiterlisthistory',
  templateUrl: './waiterlisthistory.component.html',
  styleUrls: ['./waiterlisthistory.component.css'],
})
export class WaiterlisthistoryComponent {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private cookieService: CookieService
  ) {}
  userId: String | null = null;

  getdata() {
    this.userId = this.route.snapshot.paramMap.get('userId');
    const body = { id: this.userId, token: this.cookieService.get('admin') };
    this.http
      .post(`http://localhost:8080/rest/getwaitershistory/${this.userId}`, body)
      .pipe(
        catchError((error: HttpErrorResponse): Observable<any> => {
          //  console.error('An error occurred:', error.message);
          return throwError([this.router.navigate([''])]);
        })
      )
      .subscribe((response: any) => {
        console.log(response);

        this.waiters = response;
      });
  }

  ngOnInit() {
    this.getdata();
  }
  public waiters: String[] = [];

  send(nam: String) {
    const body = {
      id: 0,
      name: nam,
      password: '',
      token: this.cookieService.get('admin'),
    };
    console.log(nam);
    this.http
      .post('http://localhost:8080/rest/openwaiterhistory', body, {
        responseType: 'text',
      })
      .pipe(
        catchError((error: HttpErrorResponse): Observable<any> => {
          //  console.error('An error occurred:', error.message);
          return throwError('Doli nje problem ');
        })
      )
      .subscribe((response: any) => {
        if (response == 'Ok') {
          this.router.navigate([`/waiterdaylistadmin/${nam}`]);
        }
      });
  }
}
