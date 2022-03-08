import { Component, OnInit,EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  public name : string = '';
  public age : number = 50;
  public num : number = 2;
  public email:string='';
  public password:string = "";
  @Output() addStudentChild : any = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
  addStudent(){
    this.addStudentChild.emit({name:this.name,email:this.email,password:this.password})
  }
}
