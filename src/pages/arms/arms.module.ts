import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArmsPage } from './arms';

@NgModule({
  declarations: [
    ArmsPage,
  ],
  imports: [
    IonicPageModule.forChild(ArmsPage),
  ],
})
export class ArmsPageModule {}
