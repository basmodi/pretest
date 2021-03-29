import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Q2Component } from './q2.component';


const routes: Routes = [
  { path: '', component: Q2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Q2RoutingModule { }
