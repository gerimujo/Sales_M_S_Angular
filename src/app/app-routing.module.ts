import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { DrinkadminComponent } from './drinkadmin/drinkadmin.component';
import { NavbarwaiterComponent } from './navbarwaiter/navbarwaiter.component';
import { HomewaiterComponent } from './homewaiter/homewaiter.component';
import { HistorywaiterComponent } from './historywaiter/historywaiter.component';
import { WaiterlisthistoryComponent } from './waiterlisthistory/waiterlisthistory.component';
import { WaiterdayadminComponent } from './waiterdayadmin/waiterdayadmin.component';
import { WaiterloginComponent } from './waiterlogin/waiterlogin.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'loginadmin', component: AdminComponent },
  { path: 'loginwaiter', component: WaiterloginComponent },
  { path: 'waiterlist', component: HomeadminComponent },
  { path: 'drinklist', component: DrinkadminComponent },
  { path: 'homewaiter', component: HomewaiterComponent },
  { path: 'orderswaiter', component: HistorywaiterComponent },
  { path: 'waiterhistoryadmin', component: WaiterlisthistoryComponent },
  { path: 'waiterdaylistadmin', component: WaiterdayadminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
