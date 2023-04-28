import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.component.html',
  styleUrls: ['./homeadmin.component.css'],
})
export class HomeadminComponent {
  constructor(private http: HttpClient) {}

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
    const body = { id: this.id, name: this.namehap, password: this.passhap };
    this.http
      .put('http://localhost:8080/rest/updatawaiter', body)
      .subscribe((response: any) => {
        if (response.length > 0) {
          window.location.href = window.location.href;
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
    this.http
      .delete(`http://localhost:8080/rest/deletewaiter?id=${id}`)
      .subscribe((response: any) => {
        window.location.href = window.location.href;
      });
  }
  getdata() {
    this.http
      .get('http://localhost:8080/rest/getWaiter')
      .subscribe((response: any) => {
        if (response.length > 0) {
          this.waiter = response;
        }
      });
  }
  sendata() {
    const body = { name: this.emri, password: this.password };

    this.http
      .post('http://localhost:8080/rest/addWaiter', body)
      .subscribe((response: any) => {
        if (response.length > 0) {
          window.location.href = window.location.href;
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
