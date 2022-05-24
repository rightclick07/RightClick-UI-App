import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoftwareEngineeringRoutingModule } from './software-engineering-routing.module';
import { SoftwareEngineeringComponent } from './software-engineering.component';


@NgModule({
  declarations: [
    SoftwareEngineeringComponent
  ],
  imports: [
    CommonModule,
    SoftwareEngineeringRoutingModule
  ]
})
export class SoftwareEngineeringModule { }
