import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MlRoutingModule } from './ml-routing.module';
import { MlComponent } from './ml.component';


@NgModule({
  declarations: [
    MlComponent
  ],
  imports: [
    CommonModule,
    MlRoutingModule
  ]
})
export class MlModule { }
