import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CnRoutingModule } from './cn-routing.module';
import { CnComponent } from './cn.component';


@NgModule({
  declarations: [
    CnComponent
  ],
  imports: [
    CommonModule,
    CnRoutingModule
  ]
})
export class CnModule { }
