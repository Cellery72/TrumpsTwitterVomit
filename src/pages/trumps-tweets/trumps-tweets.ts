import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TwitterService } from '../../providers/twitter.service';

import { TwitterUser } from '../../models/twitteruser.model';
import { Tweet } from '../../models/tweet.model';


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
  private _user: TwitterUser;
  private tweets = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public twitterSrv: TwitterService ) {
    this._user = (navParams.data != null) ? navParams.data.user : null;
  }
 ionViewWillEnter() {
    this.twitterSrv.getTweets()
      .subscribe(payload => {
        this.tweets = payload
      });
  }

}
