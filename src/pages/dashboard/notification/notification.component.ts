//         File: Notification Component
//         Date: 03-28-2017
//  Description: This component represents a single notification, gives you access to change time/vibrate/sound

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'notification',
  templateUrl: 'notification.component.html'
})
export class NotificationComponent {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
