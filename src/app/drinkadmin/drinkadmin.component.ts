import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-drinkadmin',
  templateUrl: './drinkadmin.component.html',
  styleUrls: ['./drinkadmin.component.css'],
})
export class DrinkadminComponent {
  public name: String = '';
  public price: String = '';
  public quantity: String = '';
  public disgrey: String = 'none';
  public disch: String = 'none';
  ///////
  public idpr: number = 0;
  public namepr1: String = '';
  public pricepr1: String = '';
  public quantitypr1: String = '';
  public prov: String = '';
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private cookieService: CookieService
  ) {}
  public drinks = [{ id: 0, name: '', price: '', quantity: '' }];

  close() {
    this.disgrey = 'none';
    this.disch = 'none';
  }
  ngOnInit() {
    this.fetch();
  }

  delete(id: number) {
    const body = { id: id, token: this.cookieService.get('admin') };
    this.http
      .delete(`http://localhost:8080/rest/deletedrink?id=${id}`, {
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
          this.fetch();
        }
      });
  }
  openchange(propd: any) {
    console.log('u styp');
    this.idpr = propd.id;
    this.namepr1 = propd.name;
    this.pricepr1 = propd.price;
    this.quantitypr1 = propd.quantity;
    this.disgrey = 'block';
    this.disch = 'block';
    // this.namepr = propd.name;
    // this.pricepr = propd.price;
    // this.quantitypr = propd.quantity;
  }

  submitedit() {
    const body = {
      id: this.idpr,
      name: this.namepr1,
      price: this.pricepr1,
      quantity: this.quantitypr1,
      token: this.cookieService.get('admin'),
    };
    this.http
      .put('http://localhost:8080/rest/updateDrink', body, {
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
          this.disgrey = 'none';
          this.disch = 'none';
          this.fetch();
        }
      });
  }
  userId: String | null = null;

  fetch() {
    this.userId = this.route.snapshot.paramMap.get('userId');

    const body = { id: this.userId, token: this.cookieService.get('admin') };
    this.http
      .post(`http://localhost:8080/rest/getDrinks/${this.userId}`, body)
      .pipe(
        catchError((error: HttpErrorResponse): Observable<any> => {
          //  console.error('An error occurred:', error.message);
          return throwError(this.router.navigate([``]));
        })
      )
      .subscribe((response: any) => {
        this.drinks = response;
      });
  }

  add() {
    const dsend = {
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      token: this.cookieService.get('admin'),
    };
    this.http
      .post('http://127.0.0.1:8080/rest/addDrinks', dsend, {
        responseType: 'text',
      })
      .pipe(
        catchError((error: HttpErrorResponse): Observable<any> => {
          console.error('An error occurred:', error.message);
          return throwError('Ndodhi nje problem');
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        if (response == 'Ok') {
          this.name = '';
          this.price = '';
          this.quantity = '';
          this.fetch();
        }
      });
  }
}
