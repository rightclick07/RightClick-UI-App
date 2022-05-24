import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataScienceRoutingModule } from './data-science-routing.module';
import { DataScienceComponent } from './data-science.component';


@NgModule({
  declarations: [
    DataScienceComponent
  ],
  imports: [
    CommonModule,
    DataScienceRoutingModule
  ]
})
export class DataScienceModule { }
