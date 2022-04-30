import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-html-sidenav',
  templateUrl: './html-sidenav.component.html',
  styleUrls: ['./html-sidenav.component.css']
})
export class HtmlSidenavComponent implements OnInit {
 
  @ViewChild('drawer', { static: true }) drawer: MatSidenav;

   ngAfterViewInit() {
      // this.input is NOW valid !!
      this.isHandset$.subscribe(isVisible => {
        if(isVisible) {
          this.drawer.close();
        }
      });
   }
  opened=false;
  id:any;
topics=[
  {routeName: 'intro',topic:"Introduction"},
  {routeName: 'text-editor',topic:"Choosing Text Editor"},
  {routeName: 'create-html',topic:"Creating HTML File"},
  {routeName: 'getting-started',topic:"Getting Started"},
  {routeName: 'basic-tags',topic:"Basic Tags"},
  {routeName: 'comments',topic:"Comments"},
  {routeName: 'style-color',topic:"Style & Color"},
  {routeName: 'page-format',topic:"Formatting a Page"},
  {routeName: 'links',topic:"Links"},
  {routeName: 'images',topic:"Images"},
  {routeName: 'videos',topic:"Videos"},
  {routeName: 'lists',topic:"Lists"},
  {routeName: 'tables',topic:"Tables"},
  {routeName: 'div-span',topic:"Divs & Spans"},
  {routeName: 'input-form',topic:"Input & Forms"},
  {routeName: 'iframes',topic:"IFRAMES"},
  
  
  
  
]
isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // this.id = this.activatedRoute.snapshot.paramMap.get('id');
    
  }


}
