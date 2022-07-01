import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {startWith} from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/AuthService/authentication.service';
import { UserService } from 'src/app/Services/user/user.service';
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
    private authService:AuthenticationService,
    private userService:UserService) {}
  showSocialForMobile=false;
  showSocialForweb=true;
  myControl = new FormControl();
  courses = [
    
    {
      title:"Artificial Intelligence",
      routeUrl: 'ai',
    },
    {
      title:"Angular",
      routeUrl:"angular"
    },
    {
      title:"Angular Material",
      routeUrl: 'angular-material',

    },
    {
      title:"AWS",
      routeUrl: 'aws'
    },
    {
      title:"Blockchain",
      routeUrl: 'blockchain'
    },
    {
      title:"C Programming",
      routeUrl: 'c'
      
    },
    {
      title:"C++ Programming",
      routeUrl: 'c++'
    },
    {
      title:"Computer Network",
      routeUrl: 'cn'
    },
    {
      title:"Computer Organisation",
      routeUrl: 'coa'
    },
    {
      title:"Compiler Design",
      routeUrl: 'compiler-design'
    },
    {
      title:"CSS",
      routeUrl: 'css'
    },
    {
      title:"Cyber Security",
      routeUrl: 'cyber-security'
    },
    {
      title:"Data Science",
      routeUrl: 'data-science'
    },
    {
      title:"C Programming",
      routeUrl: 'dbms',
    },
    {
      title:"Discrete Maths",
      routeUrl: 'discrete',
    },
    {
      title:"Data Structure and Algorithm",
      routeUrl: 'dsa',
    },
    {
      title:"Flutter",
      routeUrl: 'flutter',
    },
    {
      title:"HTML",
      routeUrl: 'html',
    },
    {
      title:"Java Programming",
      routeUrl: 'java',
      
    },
    {
      title:"Javascript",
      routeUrl: 'javascript', 
    },
    {
      title:"Kubernetes",
      routeUrl: 'kubernetes'
    },
    {
      title:"Machine Learning",
      routeUrl: 'ml'
    },
    {
      title:"Operating System",
      routeUrl: 'os' 
    },
    {
      title:"Python",
      routeUrl: 'python'
    },
    {
      title:"React",
      routeUrl: 'react',
    },
    {
      title:"SEO",
      routeUrl: 'seo',
    },
    {
      title:"Software Engineering",
      routeUrl: 'software-engineering',
    },
    {
      title:"Spring-Boot",
      routeUrl: 'springboot',
    },
    {
      title:"SQL",
      routeUrl: 'sql', 
    },
    {
      title:"System Design",
      routeUrl: 'system-design',
    },
    {
      title:"TypeScript",
      routeUrl: 'typescript',
      
    },
  
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
  options: string[] = ['Artificial Intelligence','Angular','Angular Material','AWS',
  'Blockchain','C Programming','C++ Programming','Computer Network','Computer Organisation',
  'Compiler Design','CSS','Cyber Security','Data Science','C Programming',
  'Discrete Maths','Data Structure and Algorithm','Flutter','HTML',
  'Java Programming','Javascript','Kubernetes','Machine Learning',
  'Operating System','Python','React','SEO','Software Engineering',
  'Spring-Boot','SQL','System Design','TypeScript'];
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
    const username=this.authService.getUserFullName();
    if(username){
      this.userService.getFullUserName(username).subscribe(
        response=>{
            this.FullName=response;
        },
        error=>{
          // console.log(error);
          
        }
      )
    }
    
  }
  public isLoggedIn(){
    // console.log(this.authService.isUserLoggedIn());
    return this.authService.isUserLoggedIn(); ;
    
  }
  logout(){
    this.authService.clear();
    this.router.navigateByUrl('/login')
  }
}
