import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CyberSecurityRoutingModule } from './cyber-security-routing.module';
import { CyberSecurityComponent } from './cyber-security.component';


@NgModule({
  declarations: [
    CyberSecurityComponent
  ],
  imports: [
    CommonModule,
    CyberSecurityRoutingModule
  ]
})
export class CyberSecurityModule { }
