import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Q2Component } from './q2.component';

import { Q2RoutingModule } from './q2-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [Q2Component],
  imports: [
    CommonModule,
    Q2RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Q2Module { }
