//         File: Trumps-Tweets Component
//         Date: 04-05-2017
//  Description: The trumps-tweets page displays a list of the most recent tweets

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TwitterService } from '../../providers/twitter.service';

import { TwitterUser } from '../../models/twitteruser.model';

@Component({
  selector: 'page-trumps-tweets',
  templateUrl: 'trumps-tweets.html'
})
export class TrumpsTweetsPage {
  private _user: TwitterUser;
  private tweets = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public twitterSrv: TwitterService) {
    this._user = (navParams.data != null) ? navParams.data.user : null;
    
  }

  ionViewWillEnter() {
    // Grabs the most recent tweets - user specifies the count
    this.twitterSrv.getRecentTweets(5)
      .subscribe(data => this.tweets = data);
  }


  openDashboard() {
    this.navCtrl.pop();
  }

}