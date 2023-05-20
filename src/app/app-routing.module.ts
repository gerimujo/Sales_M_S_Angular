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
  { path: 'waiterlist/:userId', component: HomeadminComponent },
  { path: 'drinklist/:userId', component: DrinkadminComponent },
  { path: 'homewaiter/:userId', component: HomewaiterComponent },
  { path: 'orderswaiter/:userId', component: HistorywaiterComponent },
  { path: 'waiterhistoryadmin/:userId', component: WaiterlisthistoryComponent },
  { path: 'waiterdaylistadmin/:userId', component: WaiterdayadminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
