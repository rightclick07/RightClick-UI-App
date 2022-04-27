import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  job_list=[
    {
      jobId:1,
      jobTitle:"Angular Developer",
      jobIcon: "assets/img/icon/angular.png",
      jobLocation:"Bangalore,India",
      jobType:"Full-Time",
      lastPosted:"2 days ago"
     },
    {
     jobId:2,
     jobTitle:"React Developer",
     jobIcon: "assets/img/icon/react.png",
     jobLocation:"Bangalore,India",
     jobType:"Full-Time",
     lastPosted:"3 days ago",
   },
   {
     jobId:3,
     jobTitle:"Java Developer",
     jobIcon: "assets/img/icon/java.png",
     jobLocation:"Bangalore,India",
     jobType:"Part-Time",
     lastPosted:"3 days ago",
   },
   {
     jobId:4,
     jobTitle:"Full-Stack Developer",
     jobIcon: "assets/img/icon/fullstack.png",
     jobLocation:"Bangalore,India",
     jobType:"Full-Time",
     lastPosted:"4 days ago",
   },
   {
     jobId:5,
     jobTitle:"Android Developer",
     jobIcon: "assets/img/icon/android.png",
     jobLocation:"Bangalore,India",
     jobType:"Part-Time",
     lastPosted:"1 days ago",
   }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
