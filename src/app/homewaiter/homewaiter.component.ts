import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-homewaiter',
  templateUrl: './homewaiter.component.html',
  styleUrls: ['./homewaiter.component.css'],
})
export class HomewaiterComponent {
  public drinks = [
    { id: 1, name: 'cola', price: 20, quantity: 10 },
    { id: 2, name: 'pepsi', price: 20, quantity: 10 },
    { id: 3, name: 'fresh', price: 20, quantity: 15 },
  ];
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private cookie: CookieService
  ) {}
  totali = [
    {
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
  public totapprice: number = 0;

  ngOnInit() {
    this.getDrink();
  }
  userId: String | null = null;

  getDrink() {
    this.userId = this.route.snapshot.paramMap.get('userId');
    const body = { id: this.userId, token: this.cookie.get('waiter') };
    this.http
      .post(`http://localhost:8080/rest/getDrinks1/${this.userId}`, body)
      .pipe(
        catchError((error: HttpErrorResponse): Observable<any> => {
          //  return throwError(error.message);
          return throwError([this.router.navigate([''])]);
        })
      )
      .subscribe((response: any) => {
        this.drinks = response;
      });
  }

  click(idw: any) {
    let dds: number = 0;
    let dds2 = 0;

    const dd = this.totali.map((d) => {
      if (d.idper == idw.id) {
        let sasia: number = 0;
        const qq = this.drinks.map((dq) => {
          console.log('id' + dq.id + '  ' + idw.id);
          if (dq.id === idw.id) {
            sasia = dq.quantity;
          }
        });
        console.log('saisa' + sasia + ' ' + d.quatity);
        if (sasia > d.quatity) {
          dds = 1;
          console.log('ekzekutohet kjo' + d.quatity + 1);

          return { ...d, quatity: d.quatity + 1 };
        } else {
          alert('no more');
          dds2 = 1;
          return { ...d };
        }
      } else {
        return { ...d };
      }
    });
    this.totali = dd;
    if (dds == 0 && dds2 == 0) {
      const x = [
        ...this.totali,
        {
          iduser: 0,
          name: '',
          product: idw.name,
          quatity: 1,
          price: idw.price,
          idper: idw.id,
          day: 0,
          dayaktiv: 0,
        },
      ];
      //  totali = [{iduser:0,name:'', product: '',quantity: 0 , price: 0,idper: 0, day:0,dayaktiv:0  }];

      this.totali = x;
    }
    this.totapprice = 0;
    const qq = this.totali.map((d) => {
      this.totapprice += d.price * d.quatity;
    });
  }
  submit() {
    const newarray = [{}];
    const perf = this.drinks.map((d) => {
      let vlera = 0;
      let kon = 0;
      this.totali.map((q) => {
        if (q.idper == d.id) {
          vlera = d.quantity - q.quatity;
          kon = 1;
        }
      });
      if (kon == 1) {
        newarray.push({ ...d, quantity: vlera });
        return { ...d, quantity: vlera };
      } else {
        return { ...d };
      }
    });

    newarray.shift();
    const arraybody = newarray.map((r, i) => {
      if (i == 0) {
        return { ...r, token: this.cookie.get('waiter') };
      } else {
        return { ...r, token: 'cc' };
      }
    });
    console.log(this.totali.toString);
    this.http
      .put('http://localhost:8080/rest/updateDrinksorder', arraybody, {
        responseType: 'text',
      })
      .pipe(
        catchError((error: HttpErrorResponse): Observable<any> => {
          //  console.error('An error occurred:', error.message);
          return throwError('Ndodhi nje problem');
        })
      )
      .subscribe((response: any) => {
        this.getDrink();
      });
    const vv = this.totali;
    vv.shift();
    const body2 = vv.map((m, i) => {
      if (i == 0) {
        return { ...m, token: this.cookie.get('waiter') };
      } else {
        return { ...m, token: 'cc' };
      }
    });
    console.log(body2);
    this.http
      .post('http://localhost:8080/rest/addorder', body2, {
        responseType: 'text',
      })
      .pipe(
        catchError((error: HttpErrorResponse): Observable<any> => {
          //  console.error('An error occurred:', error.message);
          return throwError('Ndodhi nje problem');
        })
      )
      .subscribe((response: any) => {
        this.getDrink();
      });
  }
}
