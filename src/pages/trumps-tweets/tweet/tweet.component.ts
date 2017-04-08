//         File: Notification Component
//         Date: 03-28-2017
//  Description: This component represents a single notification, gives you access to change time/vibrate/sound

import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Tweet } from '../../../models/tweet.model';

@Component({
  selector: 'tweet',
  templateUrl: 'tweet.component.html'
})
export class TweetComponent {

  @Input() theTweet: Tweet;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

   openLinkURL(tweet) {
    //url based off tweet data
    let url = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}/`
    console.log(url)
    window.open(url, '_system', 'location=no');  
  }
}
