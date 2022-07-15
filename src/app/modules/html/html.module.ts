import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlComponent } from './html.component';
import { HtmlRoutingModule } from './html-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HtmlSidenavComponent } from './html-core/html-sidenav/html-sidenav.component';
import { IntroComponent } from './html-components/intro/intro.component';
import { TextEditorComponent } from './html-components/text-editor/text-editor.component';
import { CreateHtmlFileComponent } from './html-components/create-html-file/create-html-file.component';
import { GettingStartedComponent } from './html-components/getting-started/getting-started.component';
import { BasicTagsComponent } from './html-components/basic-tags/basic-tags.component';
import { CommentsComponent } from './html-components/comments/comments.component';
import { StyleColorComponent } from './html-components/style-color/style-color.component';
import { PageFormatComponent } from './html-components/page-format/page-format.component';
import { LinksComponent } from './html-components/links/links.component';
import { ImagesComponent } from './html-components/images/images.component';
import { VideosComponent } from './html-components/videos/videos.component';
import { ListsComponent } from './html-components/lists/lists.component';
import { TablesComponent } from './html-components/tables/tables.component';
import { DivSpansComponent } from './html-components/div-spans/div-spans.component';
import { InputFormsComponent } from './html-components/input-forms/input-forms.component';
import { IframesComponent } from './html-components/iframes/iframes.component';
import { FlexModule } from '@angular/flex-layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
    HtmlComponent,
    HtmlSidenavComponent,
    IntroComponent,
    TextEditorComponent,
    CreateHtmlFileComponent,
    GettingStartedComponent,
    BasicTagsComponent,
    CommentsComponent,
    StyleColorComponent,
    PageFormatComponent,
    LinksComponent,
    ImagesComponent,
    VideosComponent,
    ListsComponent,
    TablesComponent,
    DivSpansComponent,
    InputFormsComponent,
    IframesComponent
  ],
  imports: [
    CommonModule,
    HtmlRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    FlexModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTabsModule,
    MatTableModule
  ]
})
export class HtmlModule { }
