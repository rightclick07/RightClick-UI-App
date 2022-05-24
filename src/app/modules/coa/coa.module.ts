import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoaRoutingModule } from './coa-routing.module';
import { CoaComponent } from './coa.component';


@NgModule({
  declarations: [
    CoaComponent
  ],
  imports: [
    CommonModule,
    CoaRoutingModule
  ]
})
export class CoaModule { }
