import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialComponent } from './angular-material.component';



const childRoutes: Routes = [
  { path:'' , component: AngularMaterialComponent}
  
];
const parentRoutes: Routes = [
 
];

@NgModule({
  imports: [
    RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class AngularMaterialRoutingModule { }
