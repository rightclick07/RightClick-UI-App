import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicTagsComponent } from './html-components/basic-tags/basic-tags.component';
import { CommentsComponent } from './html-components/comments/comments.component';
import { CreateHtmlFileComponent } from './html-components/create-html-file/create-html-file.component';
import { DivSpansComponent } from './html-components/div-spans/div-spans.component';
import { GettingStartedComponent } from './html-components/getting-started/getting-started.component';
import { IframesComponent } from './html-components/iframes/iframes.component';
import { ImagesComponent } from './html-components/images/images.component';
import { InputFormsComponent } from './html-components/input-forms/input-forms.component';
import { IntroComponent } from './html-components/intro/intro.component';
import { LinksComponent } from './html-components/links/links.component';
import { ListsComponent } from './html-components/lists/lists.component';
import { PageFormatComponent } from './html-components/page-format/page-format.component';
import { StyleColorComponent } from './html-components/style-color/style-color.component';
import { TablesComponent } from './html-components/tables/tables.component';
import { TextEditorComponent } from './html-components/text-editor/text-editor.component';
import { VideosComponent } from './html-components/videos/videos.component';
import { HtmlComponent } from './html.component';



const childRoutes: Routes = [
  { path:'' , component: HtmlComponent, children:[
    {path: '',component:IntroComponent},
    {path: 'intro',component:IntroComponent},
    {path: 'text-editor',component:TextEditorComponent},
    {path: 'create-html',component:CreateHtmlFileComponent},
    {path: 'getting-started',component:GettingStartedComponent},
    {path: 'basic-tags',component:BasicTagsComponent},
    {path: 'comments',component:CommentsComponent},
    {path: 'style-color',component:StyleColorComponent},
    {path: 'page-format',component:PageFormatComponent},
    {path: 'links',component:LinksComponent},
    {path: 'images',component:ImagesComponent},
    {path: 'videos',component:VideosComponent},
    {path: 'lists',component:ListsComponent},
    {path: 'tables',component:TablesComponent},
    {path: 'div-span',component:DivSpansComponent},
    {path: 'input-form',component:InputFormsComponent},
    {path: 'iframes',component:IframesComponent},
  ]

  },

  
];


@NgModule({
  imports: [
    RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class HtmlRoutingModule { }
