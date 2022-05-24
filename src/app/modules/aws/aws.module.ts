import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AwsRoutingModule } from './aws-routing.module';
import { AwsComponent } from './aws.component';


@NgModule({
  declarations: [
    AwsComponent
  ],
  imports: [
    CommonModule,
    AwsRoutingModule
  ]
})
export class AwsModule { }
