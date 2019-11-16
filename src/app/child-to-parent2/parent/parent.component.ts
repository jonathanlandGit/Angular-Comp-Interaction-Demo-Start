import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  // TODO (1) declare parentMessage var of type string, (2) create receiveMessage method and 
  //  set the parentMessage to the event

  constructor() { }

  ngOnInit() {
  }

}
