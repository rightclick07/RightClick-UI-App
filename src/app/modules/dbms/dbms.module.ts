import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbmsRoutingModule } from './dbms-routing.module';
import { DbmsComponent } from './dbms.component';


@NgModule({
  declarations: [
    DbmsComponent
  ],
  imports: [
    CommonModule,
    DbmsRoutingModule
  ]
})
export class DbmsModule { }
