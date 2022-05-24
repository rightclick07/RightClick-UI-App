import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiComponent } from './ai.component';

const routes: Routes = [
  { path:'' , component: AiComponent,
   children:[
   {path: '',component:AiComponent},]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiRoutingModule { }
