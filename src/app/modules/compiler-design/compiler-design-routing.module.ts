import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompilerDesignComponent } from './compiler-design.component';

const routes: Routes = [
  { path:'' , component: CompilerDesignComponent,
   children:[
   {path: '',component:CompilerDesignComponent},]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompilerDesignRoutingModule { }
