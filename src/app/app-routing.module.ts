import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';





const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "product",
    loadChildren: "./product/product.module#ProductModule" 
  },
  {
    path: "user",
    loadChildren:"./user/user.module#UserModule"
  },
  {
    path: "**",
    redirectTo: "dashboard"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
