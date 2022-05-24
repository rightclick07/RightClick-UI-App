import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CProgrammingRoutingModule } from './c-programming-routing.module';
import { CProgrammingComponent } from './c-programming.component';


@NgModule({
  declarations: [
    CProgrammingComponent
  ],
  imports: [
    CommonModule,
    CProgrammingRoutingModule
  ]
})
export class CProgrammingModule { }
