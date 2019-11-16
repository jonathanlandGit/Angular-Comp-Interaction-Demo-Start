import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  // TODO (1) create message var, (2) create viewchild var, and (3) updateMessage() method to
  // access message from child component

  constructor(private cdr: ChangeDetectorRef) { }

   ngOnInit() {
    // call updateMessage() here on page initialization to load message

  }

  //updateMessage()
}
