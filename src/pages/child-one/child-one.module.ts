import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ChildOnePage } from './child-one';

@NgModule({
  imports: [IonicPageModule.forChild(ChildOnePage)],
  declarations: [ChildOnePage],
  entryComponents: [ChildOnePage]
})
export class ChildOnePageModule {}
