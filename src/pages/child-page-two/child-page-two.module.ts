import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChildPageTwoPage } from './child-page-two';

@NgModule({
  declarations: [
    ChildPageTwoPage,
  ],
  imports: [
    IonicPageModule.forChild(ChildPageTwoPage),
  ],
})
export class ChildPageTwoPageModule {}
