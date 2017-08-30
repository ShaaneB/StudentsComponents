import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-liststudents',
  templateUrl: './list.component.html',
  styleUrls: ['./list.components.css']
})
export class ListComponents implements OnInit {

  @Output() AddClicked = new EventEmitter<any>();
  @Input() message;
  flag = 'list';
  printing = false;

  listStudents():void {
      this.printing = true;
  console.log('Showing stored Students');
}

  constructor() { }

  ngOnInit() {
  }

}