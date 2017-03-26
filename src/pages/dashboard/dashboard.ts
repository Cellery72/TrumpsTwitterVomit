//         File: Home Page Component
//         Date: 03-25-2017
//  Description: The home page is the first screen upon opening the app.

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //let id = navParams.get('id');
    console.log(navParams.data);
  }

  ionViewDidLoad() {
    console.log("I'm alive!");
  }
}
