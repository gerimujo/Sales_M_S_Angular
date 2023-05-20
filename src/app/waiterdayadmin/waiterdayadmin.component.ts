import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-waiterdayadmin',
  templateUrl: './waiterdayadmin.component.html',
  styleUrls: ['./waiterdayadmin.component.css'],
})
export class WaiterdayadminComponent {
  public num: number = 20;
  arrays: number[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {}
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
  userId: String | null = null;

  krijo() {
    this.userId = this.route.snapshot.paramMap.get('userId');

    this.http
      .get(`http://localhost:8080/rest/getdays/${this.userId}`)
      .subscribe((response: any) => {
        this.num = response;
        if (response == -1) {
          window.location.href = 'http://localhost:4200/';
        } else {
          for (var i = 1; i <= this.num; i++) {
            this.arrays.push(i);
          }
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
