//         File: Home Page Component
//         Date: 03-25-2017
//  Description: The home page is the first screen upon opening the app.

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TrumpsTweetsPage } from './../trumps-tweets/trumps-tweets';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  private _user: TwitterUser;
  private _notes: TimedNotification[];
  private notification_count: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // setting the local user on construction
    this._user = (navParams.data != null) ? navParams.data.user : null;
  }

  //Logout function
  private logout(): void {
    // for the time being to test navigation and such, we simply pop... more to come however
    this.navCtrl.pop();
  }
  
  //function to save notification settings and direct to the trumps-tweets page
  save() {
    //do some saving
    //redirect to trumps tweets page
    this.navCtrl.push(TrumpsTweetsPage );
  }
  // Need a function to handle possesion of the dashboard..
  // ie. if it's Trump's Dashboard or if it's Samsus' dashboard.. that ' is key
}
