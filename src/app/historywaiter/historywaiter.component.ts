import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-historywaiter',
  templateUrl: './historywaiter.component.html',
  styleUrls: ['./historywaiter.component.css'],
})
export class HistorywaiterComponent {
  public num: number = 20;
  arrays: number[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private cookie: CookieService
  ) {}
  public orders1 = [
    {
      id: 0,
      iduser: 0,
      name: '',
      product: '',
      quatity: 0,
      price: 0,
      idper: 0,
      day: 0,
      dayaktiv: 0,
    },
  ];
  public orders = [
    {
      id: 0,
      iduser: 0,
      name: '',
      product: '',
      quatity: 0,
      price: 0,
      idper: 0,
      day: 0,
      dayaktiv: 0,
    },
  ];
  ngOnInit() {
    this.krijo();
  }
  openday(day: number) {
    this.totalhistiry = 0;
    const array = this.orders1.filter((d) => d.day == day);
    array.map((d) => {
      this.totalhistiry += d.price;
    });
    this.orders = array;
  }
  public totalhistiry: number = 0;
  endday() {
    this.userId = this.route.snapshot.paramMap.get('userId');
    const body = { id: this.userId, token: this.cookie.get('waiter') };
    this.http
      .post('http://localhost:8080/rest/updatestateday', body)
      .pipe(
        catchError((error: HttpErrorResponse): Observable<any> => {
          //  console.error('An error occurred:', error.message);
          return throwError('Ndodhi nje problem');
        })
      )
      .subscribe((response: any) => {
        this.krijo();
      });
  }
  userId: String | null = null;

  krijo() {
    this.userId = this.route.snapshot.paramMap.get('userId');
    const body = { id: this.userId, token: this.cookie.get('waiter') };
    this.http
      .post(`http://localhost:8080/rest/getdays1/${this.userId}`, body)
      .pipe(
        catchError((error: HttpErrorResponse): Observable<any> => {
          //  console.error('An error occurred:', error.message);
          return throwError([this.router.navigate([''])]);
        })
      )
      .subscribe((response: any) => {
        if (response == -1) {
          this.router.navigate(['']);
        } else {
          this.num = response;

          for (var i = 1; i <= this.num; i++) {
            this.arrays.push(i);
          }
        }
      });

    this.http
      .post('http://localhost:8080/rest/allorders', body)
      .pipe(
        catchError((error: HttpErrorResponse): Observable<any> => {
          //  console.error('An error occurred:', error.message);
          return throwError('Ndodhi nje problem');
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        this.orders1 = response;
      });
  }
}
