import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.component.html',
  styleUrls: ['./homeadmin.component.css'],
})
export class HomeadminComponent {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private cookieService: CookieService
  ) {}

  public emri: String = '';
  public password: String = '';
  public createdis1: String = 'none';
  openedit(dd: any) {
    this.createdis1 = 'block';
    this.disgri2 = 'block';
    this.id = dd.id;
    this.namehap = dd.name;
    this.passhap = dd.password;
  }
  updatewaiter() {
    const token = this.cookieService.get('admin');
    const body = {
      id: this.id,
      name: this.namehap,
      password: this.passhap,
      token: token,
    };
    this.http
      .put('http://localhost:8080/rest/updatawaiter', body, {
        responseType: 'text',
      })
      .pipe(
        catchError((error: HttpErrorResponse): Observable<any> => {
          //  console.error('An error occurred:', error.message);
          return throwError('Ndodhi nje problem');
        })
      )
      .subscribe((response: any) => {
        if (response == 'Ok') {
          this.createdis1 = 'none';
          this.disgri2 = 'none';

          this.createdis = 'none';
          this.getdata();
        }
      });
  }

  closeedit1() {
    this.createdis1 = 'none';
    this.disgri2 = 'none';
  }
  ngOnInit() {
    this.getdata();
  }

  delete(id: number) {
    this.userId = this.route.snapshot.paramMap.get('userId');
    const body = { id: this.userId, token: this.cookieService.get('admin') };
    this.http
      .delete(`http://localhost:8080/rest/deletewaiter?id=${id}`, {
        responseType: 'text',
        body: JSON.stringify(body),
      })
      .pipe(
        catchError((error: HttpErrorResponse): Observable<any> => {
          //  console.error('An error occurred:', error.message);
          return throwError('Ndodhi nje problem');
        })
      )
      .subscribe((response: any) => {
        if (response == 'Ok') {
          this.getdata();
        }
      });
  }
  userId: String | null = null;
  getdata() {
    this.userId = this.route.snapshot.paramMap.get('userId');
    const body = { id: this.userId, token: this.cookieService.get('admin') };
    console.log(body);
    console.log(this.cookieService.get('admin'));
    this.http
      .post(`http://localhost:8080/rest/getWaiter/${this.userId}`, body)
      .pipe(
        catchError((error: HttpErrorResponse): Observable<any> => {
          //  console.error('An error occurred:', error.message);
          return throwError(this.router.navigate([``]));
        })
      )
      .subscribe((response: any) => {
        console.log(response);

        this.waiter = response;
      });
  }
  sendata() {
    const token = this.cookieService.get('admin');
    const body = { name: this.emri, password: this.password, token: token };

    this.http
      .post('http://localhost:8080/rest/addWaiter', body, {
        responseType: 'text',
      })
      .pipe(
        catchError((error: HttpErrorResponse): Observable<any> => {
          console.error('An error occurred:', error.message);
          return throwError('Ndodhi nje problem');
        })
      )
      .subscribe((response: any) => {
        if (response == 'Ok') {
          this.createdis1 = 'none';
          this.disgri2 = 'none';

          this.createdis = 'none';
          this.getdata();
          this.emri = '';
          this.password = '';
        }
      });
  }
  public disgri2 = 'none';
  public createdis = 'none';

  close() {
    this.disgri2 = 'none';
    this.createdis = 'none';
  }

  opencreate() {
    this.disgri2 = 'block';
    this.createdis = 'block';
  }
  public namehap: String = '';
  public passhap: String = '';
  public id: number = 0;

  public waiter = [{ name: '', password: '', id: 0, display: 'block' }];
  rregullo(id: number) {
    const updatedWaiter = this.waiter.map((d) => {
      if (d.id === id) {
        return { ...d, display: d.display === 'block' ? 'none' : 'block' };
      } else {
        return { ...d, display: 'none' };
      }
    });
    this.waiter = updatedWaiter;
    console.log(updatedWaiter);
    console.log('id' + id);
  }
}
