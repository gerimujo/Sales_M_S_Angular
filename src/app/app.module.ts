import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { NavbaramdinComponent } from './navbaramdin/navbaramdin.component';
import { DrinkadminComponent } from './drinkadmin/drinkadmin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomewaiterComponent } from './homewaiter/homewaiter.component';
import { NavbarwaiterComponent } from './navbarwaiter/navbarwaiter.component';
import { HistorywaiterComponent } from './historywaiter/historywaiter.component';
import { WaiterlisthistoryComponent } from './waiterlisthistory/waiterlisthistory.component';
import { WaiterdayadminComponent } from './waiterdayadmin/waiterdayadmin.component';
import { WaiterloginComponent } from './waiterlogin/waiterlogin.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    HomeadminComponent,
    NavbaramdinComponent,
    DrinkadminComponent,
    HomewaiterComponent,
    NavbarwaiterComponent,
    HistorywaiterComponent,
    WaiterlisthistoryComponent,
    WaiterdayadminComponent,
    WaiterloginComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
