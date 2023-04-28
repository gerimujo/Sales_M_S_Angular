import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http: HttpClient) {}
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
  getDrink() {
    this.http
      .get('http://localhost:8080/rest/getDrinks')
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
    console.log(dd);
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
        return { d };
      }
    });

    newarray.shift();
    console.log(newarray.length);
    this.http
      .put('http://localhost:8080/rest/updateDrinksorder', newarray)
      .subscribe((response: any) => {
        if (response.length > 0) {
          window.location.href = window.location.href;
        }
      });
    const vv = this.totali;
    vv.shift();
    this.http
      .post('http://localhost:8080/rest/addorder', vv)
      .subscribe((Response: any) => {
        if (Response.length > 0) {
          window.location.href = window.location.href;
        }
      });
  }
}
