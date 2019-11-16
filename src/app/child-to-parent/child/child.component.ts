import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  //TODO create message var of type string w/ sample data that will be declared in child component and shown in parent component

  constructor() { }

  ngOnInit() {
  }

}
