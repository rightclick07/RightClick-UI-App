import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialComponent } from './angular-material.component';
import { AngularMaterialRoutingModule } from './angular-material-routing.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AngularMaterialComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialRoutingModule,
    MatCardModule
  ]
})
export class AngularMaterialModule { }
