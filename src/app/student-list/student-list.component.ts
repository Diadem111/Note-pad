import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { studentInterface } from '../type/student.interface';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
@Input() public allStudents :any = [];
@Output() deleteStudentChild:any = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  deleteStudent(i:any){
 this.deleteStudentChild.emit(i);
  }

}
