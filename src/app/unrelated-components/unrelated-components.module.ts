import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnrelatedComponentsRoutingModule } from './unrelated-components-routing.module';
import { ParentComponent } from './parent/parent.component';
import { SiblingComponent } from './sibling/sibling.component';

@NgModule({
  declarations: [ParentComponent, SiblingComponent],
  imports: [
    CommonModule,
    UnrelatedComponentsRoutingModule
  ]
})
export class UnrelatedComponentsModule { }
