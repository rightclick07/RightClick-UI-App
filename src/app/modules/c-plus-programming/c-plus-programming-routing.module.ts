import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CPlusProgrammingComponent } from './c-plus-programming.component';

const routes: Routes = [
  { path:'' , component: CPlusProgrammingComponent,
   children:[
   {path: '',component:CPlusProgrammingComponent},]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CPlusProgrammingRoutingModule { }
