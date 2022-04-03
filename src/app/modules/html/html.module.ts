import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlComponent } from './html.component';
import { HtmlRoutingModule } from './html-routing.module';



@NgModule({
  declarations: [
    HtmlComponent
  ],
  imports: [
    CommonModule,
    HtmlRoutingModule
  ]
})
export class HtmlModule { }
