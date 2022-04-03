import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlComponent } from './html.component';



const childRoutes: Routes = [
  { path:'' , component: HtmlComponent,

  },

  
];


@NgModule({
  imports: [
    RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class HtmlRoutingModule { }
