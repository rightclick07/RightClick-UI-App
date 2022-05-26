import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


declare var gtag:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'right-click';
  constructor(router: Router) {
    const navEndEvent = router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    );
    navEndEvent.subscribe((event:any) => {
      gtag('config', 'G-6QJNNYL16D',{
        'page_path': event.urlAfterRedirects
      });
    });
  
  }
}
