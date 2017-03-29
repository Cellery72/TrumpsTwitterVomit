import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the TrumpsTweets page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-trumps-tweets',
  templateUrl: 'trumps-tweets.html'
})
export class TrumpsTweetsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrumpsTweetsPage');
  }

  openDashboard(){
        this.navCtrl.pop();
  }

}
