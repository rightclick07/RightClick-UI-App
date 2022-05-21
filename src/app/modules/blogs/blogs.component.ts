import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  panelOpenState = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  trendingBlogs=[
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
  OpenTrendingBlog(id:number){
    let routeString="";
    for(let key of this.trendingBlogs){
        if(key.id==id){
          routeString=key.routePath;
        }
    }
    this.router.navigateByUrl(routeString)
  }
}
