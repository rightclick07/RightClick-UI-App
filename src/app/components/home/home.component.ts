import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses=[
    {
      id:1,
      title:"Angular",
      img:"assets/img/courses/angular.png",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"angular"
    },
    {
      id:2,
      title:"Angular Material ",
      img:"assets/img/courses/angular-material.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"angular-material"
    },
    {
      id:3,
      title:"HTML",
      img:"assets/img/courses/html.png",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      routePath:"html"
    },
    {
      id:4,
      title:"CSS",
      img:"assets/img/courses/angular.png",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"css"
    },
    {
      id:5,
      title:"Angular Material",
      img:"assets/img/courses/angular-material.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"angular"
    },
    {
      id:6,
      title:"HTML",
      img:"assets/img/courses/html.png",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"angular"
    },
    {
      id:7,
      title:"HTML",
      img:"assets/img/courses/html.png",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"angular"
    },
    {
      id:8,
      title:"BlockChain",
      img:"assets/img/courses/html.png",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"angular"
    },
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  OpenCourse(id:number){
    let routeString="";
    for(let key of this.courses){
        if(key.id==id){
          routeString=key.routePath;
        }
    }
    this.router.navigateByUrl(routeString)
  }
}
