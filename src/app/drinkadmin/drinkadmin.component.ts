import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http: HttpClient) {}
  public drinks = [{ id: 0, name: '', price: '', quantity: '' }];

  close() {
    this.disgrey = 'none';
    this.disch = 'none';
  }
  ngOnInit() {
    this.fetch();
  }

  delete(id: number) {
    this.http
      .delete(`http://localhost:8080/rest/deletedrink?id=${id}`)
      .subscribe((response: any) => {
        if (response.length > 0) {
          window.location.href = window.location.href;
        }
      });
  }
  openchange(propd: any) {
    this.idpr = propd.id;
    this.namepr1 = propd.name;
    this.pricepr1 = propd.price;
    this.quantitypr1 = propd.quantity;
    // this.namepr = propd.name;
    // this.pricepr = propd.price;
    // this.quantitypr = propd.quantity;
    console.log('butoni edit u shtyp');
    this.disgrey = 'block';
    this.disch = 'block';
    console.log('idpr' + this.idpr);

    console.log('--------------------------');
    console.log('id' + propd.id);
    console.log('name' + propd.name);
    console.log('price' + propd.price);
    console.log('quantity' + propd.quantity);
  }
  getvalue(s: String, ss: String, sss: String) {
    //this.namepr = s;
    //this.pricepr = ss;
    //quantitypr = sss;
  }

  print() {
    console.log('id22' + this.idpr);
    console.log('name22' + this.namepr1);
    console.log('price22' + this.pricepr1);
    console.log('quatity22' + this.quantitypr1);
    console.log('prov' + this.prov);
    console.log('-------------------');
    console.log('444+' + this.name);
    console.log('444+' + this.price);
    console.log('444+' + this.quantity);
  }

  submitedit() {
    const body = {
      id: this.idpr,
      name: this.namepr1,
      price: this.pricepr1,
      quantity: this.quantitypr1,
    };
    this.http
      .put('http://localhost:8080/rest/updateDrink', body, {
        withCredentials: true,
      })
      .subscribe((response: any) => {
        if (response.length > 0) {
          window.location.href = window.location.href;
        }
      });
    console.log(body);
  }
  fetch() {
    this.http
      .get('http://localhost:8080/rest/getDrinks')
      .subscribe((response: any) => {
        this.drinks = response;
        console.log(this.drinks);
      });
  }

  add() {
    const dsend = {
      name: this.name,
      price: this.price,
      quantity: this.quantity,
    };
    this.http
      .post('http://127.0.0.1:8080/rest/addDrinks', dsend, {
        withCredentials: true,
      })
      .subscribe((response: any) => {
        if (response.length > 0) {
          window.location.href = window.location.href;
        }
      });
  }
}
