import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  // TODO (1) create childMessage of type string, (2) create @Output decorator/event emitter of type string,
  // (3) create sendMessage() method and emit the child message to parent component

  constructor() { }

  ngOnInit() {
  }

  // sendMessage()

}
