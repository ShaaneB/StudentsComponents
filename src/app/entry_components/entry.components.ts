import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.components.html',
  styleUrls: ['./entry.components.css']
})
export class EntryComponent implements OnInit {

  studNo: number;
  studFname: string;
  studLname: string;
  studProg: string;
  studYr: number;
  students;
  
  getStudentEntry(): object{
    this.students = {
      studNo: this.studNo,
      studFname: this.studFname,
      studLname: this.studLname,
      studProg: this.studProg,
      studYr: this.studYr
    };
    
    this.studNo = null;
    this.studFname = null;
    this.studLname = null;
    this.studProg = null;
    this.studYr = null;
    return this.students;
  }

  constructor() { }

  ngOnInit() {
  }

}