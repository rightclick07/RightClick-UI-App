import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KubernetesRoutingModule } from './kubernetes-routing.module';
import { KubernetesComponent } from './kubernetes.component';


@NgModule({
  declarations: [
    KubernetesComponent
  ],
  imports: [
    CommonModule,
    KubernetesRoutingModule
  ]
})
export class KubernetesModule { }
