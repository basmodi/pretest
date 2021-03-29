import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Q1Component } from './q1.component';

import { Q1RoutingModule } from './q1-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [Q1Component],
  imports: [
    CommonModule,
    Q1RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Q1Module { }
