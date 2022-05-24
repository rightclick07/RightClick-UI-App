import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscreteRoutingModule } from './discrete-routing.module';
import { DiscreteComponent } from './discrete.component';


@NgModule({
  declarations: [
    DiscreteComponent
  ],
  imports: [
    CommonModule,
    DiscreteRoutingModule
  ]
})
export class DiscreteModule { }
