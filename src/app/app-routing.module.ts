import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { Q1Module } from './q1/q1.module';
import { Q2Module } from './q2/q2.module';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  {
    "path": 'Q1',
    "loadChildren": "./q1/q1.module#Q1Module"
  },
  {
    "path": 'Q2',
    "loadChildren": "./q2/q2.module#Q2Module"
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
