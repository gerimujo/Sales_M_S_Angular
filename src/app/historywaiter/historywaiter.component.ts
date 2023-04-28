import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-historywaiter',
  templateUrl: './historywaiter.component.html',
  styleUrls: ['./historywaiter.component.css'],
})
export class HistorywaiterComponent {
  public num: number = 20;
  arrays: number[] = [];

  constructor(private http: HttpClient) {}
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
    this.http
      .put('http://localhost:8080/rest/updatestateday', this.orders)
      .subscribe((response: any) => {
        if (response.length > 0) {
          window.location.href = window.location.href;
        }
      });
  }
  krijo() {
    this.http
      .get('http://localhost:8080/rest/getdays')
      .subscribe((response: any) => {
        this.num = response;

        for (var i = 1; i <= this.num; i++) {
          this.arrays.push(i);
        }
        console.log(this.arrays);
      });
    this.http
      .get('http://localhost:8080/rest/allorders')
      .subscribe((response: any) => {
        this.orders1 = response;
      });
  }
}
