import { Component } from '@angular/core';
import { studentInterface } from './type/student.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name : string = '';
  public age : number = 50;
  public num : number = 2;
  public email:string='';
  public password:string = "";
   public allStudents :studentInterface[]=[];
  changeName(){
    this.name = 'taiwo'
  };
 changeNumber(){
    this.num = Math.floor(Math.random()*10) 
  };
  addStudent(studentObject:studentInterface){
   this.allStudents.push(studentObject);
   console.log(this.allStudents);
     };
  deleteStudent(i:number){
  this.allStudents = this.allStudents.filter((_,index)=>index!==i);
  }
}
