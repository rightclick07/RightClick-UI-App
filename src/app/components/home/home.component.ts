import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  latestCourses=[
    {
      id:1,
      title:"HTML",
      img:"assets/img/courses/html.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      routePath:"html"
    },
    {
      id:2,
      title:"CSS",
      img:"assets/img/courses/css.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"css"
    },
    {
      id:3,
      title:"JavaScript",
      img:"assets/img/courses/javascript.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"javascript"
    },
    {
      id:4,
      title:"TypeScript",
      img:"assets/img/courses/typescript.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"typescript"
    },
    {
      id:5,
      title:"Angular",
      img:"assets/img/courses/angular.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"angular"
    },
    {
      id:6,
      title:"Angular Material ",
      img:"assets/img/courses/angular-material.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"angular-material"
    },
    {
      id:7,
      title:"Flutter",
      img:"assets/img/courses/Flutter.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"flutter"
    },
    
    {
      id:8,
      title:"React",
      img:"assets/img/courses/react.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"react"
    },
    
  ]
  trendingCourses=[
    {
      id:1,
      title:"Blockchain",
      img:"assets/img/courses/blockchain.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      routePath:"blockchain"
    },
    {
      id:2,
      title:"Artificial Intelligence",
      img:"assets/img/courses/ai.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"ai"
    },
    {
      id:3,
      title:"Machine Learning",
      img:"assets/img/courses/machine-learning.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"ml"
    },
    {
      id:4,
      title:"Data Science",
      img:"assets/img/courses/data-science.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"data-science"
    },
    {
      id:5,
      title:"AWS",
      img:"assets/img/courses/aws.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"aws"
    },
    {
      id:6,
      title:"Kubernetes ",
      img:"assets/img/courses/kubernetes.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"kubernetes"
    },
    {
      id:7,
      title:"Cyber Security",
      img:"assets/img/courses/Flutter.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"cyber-security"
    },
    
    {
      id:8,
      title:"SEO",
      img:"assets/img/courses/react.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"seo"
    },
    
  ]
  placementCourses=[
    {
      id:1,
      title:"C Programming",
      img:"assets/img/courses/c.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      routePath:"c"
    },
    {
      id:2,
      title:"C++ Programming",
      img:"assets/img/courses/c++.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"c++"
    },
    {
      id:3,
      title:"Java",
      img:"assets/img/courses/java.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"java"
    },
    {
      id:4,
      title:"Python",
      img:"assets/img/courses/python.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"python"
    },
    {
      id:5,
      title:"DBMS",
      img:"assets/img/courses/dbms.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"dbms"
    },
    {
      id:6,
      title:"Spring Boot",
      img:"assets/img/courses/springboot.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"springboot"
    },
    {
      id:7,
      title:"System Design",
      img:"assets/img/courses/system-design.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"system-design"
    },
    
    {
      id:8,
      title:"SQL",
      img:"assets/img/courses/sql.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"sql"
    },
    
  ]
  computerScienceCourses=[
    {
      id:1,
      title:"Computer Organisation",
      img:"assets/img/courses/coa.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      routePath:"coa"
    },
    {
      id:2,
      title:"Data Structure & Algorithm",
      img:"assets/img/courses/dsa.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"dsa"
    },
    {
      id:3,
      title:"DBMS",
      img:"assets/img/courses/dbms.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"dbms"
    },
    {
      id:4,
      title:"Operating System",
      img:"assets/img/courses/os.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"os"
    },
    {
      id:5,
      title:"Computer Network",
      img:"assets/img/courses/cn.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"cn"
    },
    {
      id:6,
      title:"Descrete Mathematics",
      img:"assets/img/courses/discrete.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"discrete"
    },
    {
      id:7,
      title:"Software Engineering",
      img:"assets/img/courses/software-engineering.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"software-engineering"
    },
    
    {
      id:8,
      title:"Compiler Design",
      img:"assets/img/courses/compiler-design.jpg",
      price:"RS 1000",
      description:"Step by Step Tutorial",
      author:"Ravi Shankar Kumar",
      rating:"",
      routePath:"compiler-design"
    },
    
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  OpenLatestCourse(id:number){
    let routeString="";
    for(let key of this.latestCourses){
        if(key.id==id){
          routeString=key.routePath;
        }
    }
    this.router.navigateByUrl(routeString)
  }
  OpenTrendingCourse(id:number){
    let routeString="";
    for(let key of this.trendingCourses){
        if(key.id==id){
          routeString=key.routePath;
        }
    }
    this.router.navigateByUrl(routeString)
  }
  OpenPlacementCourse(id:number){
    let routeString="";
    for(let key of this.placementCourses){
        if(key.id==id){
          routeString=key.routePath;
        }
    }
    this.router.navigateByUrl(routeString)
  }
  OpenComputerScienceCourse(id:number){
    let routeString="";
    for(let key of this.computerScienceCourses){
        if(key.id==id){
          routeString=key.routePath;
        }
    }
    this.router.navigateByUrl(routeString)
  }
}
