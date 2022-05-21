import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    
  
    BlogsComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    FlexModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule
   
  ]
})
export class BlogsModule { }
