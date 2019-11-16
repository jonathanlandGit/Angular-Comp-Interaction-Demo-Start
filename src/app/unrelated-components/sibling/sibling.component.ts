import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent implements OnInit {

  //TODO (1) create message var of type string, (2) on init subscribe to message,
  //  (3) create method newMessage(e) that changes the message

  constructor(private _ds: DataService) { }

  ngOnInit() {

  }

}
