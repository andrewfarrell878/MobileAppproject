import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExcerisesPage } from './excerises';

@NgModule({
  declarations: [
    ExcerisesPage,
  ],
  imports: [
    IonicPageModule.forChild(ExcerisesPage),
  ],
})
export class ExcerisesPageModule {}
