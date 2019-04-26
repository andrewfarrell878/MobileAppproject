import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExcerisesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-excerises',
  templateUrl: 'excerises.html',
})
export class ExcerisesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  openArmsPage(){
    this.navCtrl.push('ArmsPage');
  }





  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ExcerisesPage');
  }

}
