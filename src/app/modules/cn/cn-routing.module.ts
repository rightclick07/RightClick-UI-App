import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CnComponent } from './cn.component';

const routes: Routes = [
  { path:'' , component: CnComponent,
   children:[
   {path: '',component:CnComponent},]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CnRoutingModule { }
