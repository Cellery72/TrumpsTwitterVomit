/**
 *   File: Trumps-Tweets Component
 * Date: 04-05-2017
 * Description: The trumps-tweets page displays a list of the most recent tweets
 * Authors: Justin Ellery and Amanda Field
 */      

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TwitterService } from '../../providers/twitter.service';
import { DashboardPage } from '../dashboard/dashboard';
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

/**
 * This function will run on initialization
 * the twitter service method to get recent tweets will be called
 */
  ionViewWillEnter() {
    // Grabs the most recent tweets - user specifies the count
    this.twitterSrv.getRecentTweets(5)
      .subscribe(data => this.tweets = data);
  }

/**
 * This function will push the dashboard page into the nav controller stack
 */
  openDashboard() {
    this.navCtrl.push(DashboardPage)
  }

}