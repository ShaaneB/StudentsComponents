import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-addbuttons',
  templateUrl: './addbuttons.component.html',
  styleUrls: ['./addbuttons.components.css']
})
export class AddButtonComponents implements OnInit {

  @Output() AddClicked = new EventEmitter<any>();
  @Input() message;
  flag = 'add';
  printing = false;
  
  addb() { 

    this.printing = false;
    const stringPattern = /^[A-z\s]+$/;
    const studNumberPattern = /^[0-9]+$/;
    const studYearPattern = /^[1-5]+$/;

    this.AddClicked.emit({mode: this.flag});
  }

  constructor() { }

  ngOnInit() {
  }

}