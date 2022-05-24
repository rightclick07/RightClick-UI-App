import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompilerDesignRoutingModule } from './compiler-design-routing.module';
import { CompilerDesignComponent } from './compiler-design.component';


@NgModule({
  declarations: [
    CompilerDesignComponent
  ],
  imports: [
    CommonModule,
    CompilerDesignRoutingModule
  ]
})
export class CompilerDesignModule { }
