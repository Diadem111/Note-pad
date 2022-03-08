import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
 public allStudent : any = [
   {name:'dolapo',dept:"hardware",email:"dolapo@gmail.com"},
   {name:"kunle",dept:"software",email:"kunle@gmail.com"},
   {name:"fola",dept:"software",email:"fola@gmail.com"}

 ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 moreDetail(i:any){
 console.log(i);
 this.router.navigate([`student/${i}`])
 }
}
