import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscreteComponent } from './discrete.component';

const routes: Routes = [
  { path:'' , component: DiscreteComponent,
   children:[
   {path: '',component:DiscreteComponent},]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscreteRoutingModule { }
