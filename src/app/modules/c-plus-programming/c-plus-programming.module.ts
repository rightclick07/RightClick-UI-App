import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CPlusProgrammingRoutingModule } from './c-plus-programming-routing.module';
import { CPlusProgrammingComponent } from './c-plus-programming.component';


@NgModule({
  declarations: [
    CPlusProgrammingComponent
  ],
  imports: [
    CommonModule,
    CPlusProgrammingRoutingModule
  ]
})
export class CPlusProgrammingModule { }
