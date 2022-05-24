import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KubernetesComponent } from './kubernetes.component';

const routes: Routes = [
  { path:'' , component: KubernetesComponent,
   children:[
   {path: '',component:KubernetesComponent},]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KubernetesRoutingModule { }
