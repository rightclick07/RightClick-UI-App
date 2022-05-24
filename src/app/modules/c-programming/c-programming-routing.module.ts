import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CProgrammingComponent } from './c-programming.component';

const routes: Routes = [
  { path:'' , component: CProgrammingComponent,
   children:[
   {path: '',component:CProgrammingComponent},]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CProgrammingRoutingModule { }
