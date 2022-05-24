import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemDesignRoutingModule } from './system-design-routing.module';
import { SystemDesignComponent } from './system-design.component';


@NgModule({
  declarations: [
    SystemDesignComponent
  ],
  imports: [
    CommonModule,
    SystemDesignRoutingModule
  ]
})
export class SystemDesignModule { }
