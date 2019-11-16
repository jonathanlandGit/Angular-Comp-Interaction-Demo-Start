import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  // TODO (1) declare message var of type string, (2) on init subscribe to
  //  method create in service

  constructor(private _ds: DataService) { }

  ngOnInit() {
  }

}
