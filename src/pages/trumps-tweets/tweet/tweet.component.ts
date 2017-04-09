/**
 * File: Tweet Component
 * Date: 04-05-2017
 * Description: This component represents a single tweet and will give you access to redirect to the twitter app
 * Authors: Justin Ellery and Amanda Field
 */      

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
  /**
   * This function will take a tweet object and disect it to the correct url of the original Tweet
   * the user will then be redirected to the twitter app on their phone to view the selected tweet
   * @param tweet - one tweet object grabbed from request in twitter service
   */
   openLinkURL(tweet) {
    //url based off tweet data
    let url = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}/`
    console.log(url)
    window.open(url, '_system', 'location=no');  
  }
}
