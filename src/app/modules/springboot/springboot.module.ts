import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpringbootRoutingModule } from './springboot-routing.module';
import { SpringbootComponent } from './springboot.component';


@NgModule({
  declarations: [
    SpringbootComponent
  ],
  imports: [
    CommonModule,
    SpringbootRoutingModule
  ]
})
export class SpringbootModule { }
