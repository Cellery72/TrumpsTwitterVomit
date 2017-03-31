//         File: Home Page Component
//         Date: 03-25-2017
//  Description: The home page is the first screen upon opening the app.

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TrumpsTweetsPage } from './../trumps-tweets/trumps-tweets';
import { TimedNotification } from '../../models/timednotification.model';
import { TwitterUser } from '../../models/twitteruser.model';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  private _user: TwitterUser;
  private _notes: TimedNotification[] = new Array();
  private notification_count: number = 1;

  // default constructor
  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage) {
    // setting the local user on construction
    this._user = (navParams.data != null) ? navParams.data.user : null;

    // create a single note to start
    let notey = new TimedNotification(1);
    this._notes.push(notey);
  }


  // Update the Notification Array upon Dropdown selection change
  private updateNotifications(): void {
    let lastCount = this._notes.length;
    let newCount = this.notification_count;


    // add/remove appropriate amount of notifications from the array
    if (newCount > lastCount) {
      let iterations = newCount - lastCount;
      for (var num = 0; num < iterations; num++) {
        let newNotification = new TimedNotification(this._notes.length + 1);
        this._notes.push(newNotification);
      }
    }
    else if (lastCount > newCount) {
      let iterations = lastCount - newCount;

      for (var num = 0; num < iterations; num++) {
        this._notes.pop();
      }
    }
  }

  //Logout function
  private logout(): void {
    //console.log(this.storage.getUser());
    // for the time being to test navigation and such, we simply pop... more to come however
    //this.navCtrl.pop();
    //console.log(this._notes);
    this.nativeStorage.getItem('currentUser')
      .then(
      data => console.log(data),
      error => console.log(error)
      );

  }


  //function to save notification settings and direct to the trumps-tweets page
  private save(): void {
    //do some saving
    //redirect to trumps tweets page
    //this.navCtrl.push(TrumpsTweetsPage);

  }


  // Utility functions
  private pluralizeUsername(username: string): string {
    // determine the char sequence to pluralize usernames
    let returnVal = (username.substr(username.length - 1).toLowerCase() == "s") ? "'" : "'s";
    return username + returnVal;
  }
}
