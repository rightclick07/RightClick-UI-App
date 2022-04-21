import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {startWith} from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/AuthService/authentication.service';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  FullName:any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router:Router,
    private authService:AuthenticationService) {}
  showSocialForMobile=false;
  showSocialForweb=true;
  myControl = new FormControl();
  courses = [
    {
      title:"Angular",
      routeUrl:"angular"
    },
    {
      title:"Angular Material",
      routeUrl:"angular-material"
    },
    {
      title:"HTML",
      routeUrl:"html"
    }
    ];
    companyMenuList = [
      {
        title:"About Us",
        routeUrl:"about-us",
        icon:"info"
      },
      {
        title:"Contact Us",
        routeUrl:"contact-us",
        icon:"call"
      },
      {
        title:"Career",
        routeUrl:"career",
        icon:"flag"
      }
      ];
      userProfileMenuList = [
        {
          title:"Profile",
          routeUrl:"user-profile",
          icon:"person_add"
        },
        {
          title:"Logout",
          routeUrl:"",
          icon:"exit_to_app"
        }
        ];
  options: string[] = ['Angular', 'Angular Material', 'HTML'];
  filteredOptions: Observable<string[]> = new Observable<string[]>();
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
    this.isLoggedIn();
    this.getFullUserName();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  OnSearchCourse(element:string){
     let routeString=""
    for(let key of this.courses){
        if(key.title==element){
         routeString=key.routeUrl
        }
    }
    this.router.navigateByUrl(routeString)
  }
  getFullUserName(){
    this.FullName=this.authService.getUserFullName();
  }
  public isLoggedIn(){
    console.log(this.authService.isUserLoggedIn());
    return this.authService.isUserLoggedIn(); ;
    
  }
  logout(){
    this.authService.clear();
    this.router.navigateByUrl('/login')
  }
}
