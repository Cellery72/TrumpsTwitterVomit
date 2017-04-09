/**
 * File: NOtification Component
 * Date: 04-05-2017
 * Description: This component represents a single notification, gives you access to change time/vibrate/sound
 * Authors: Justin Ellery and Amanda Field
 */      


import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TimedNotification } from '../../../models/timednotification.model';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'notification',
  templateUrl: 'notification.component.html'
})
export class NotificationComponent {

  @Input() note: TimedNotification;

  constructor(public navCtrl: NavController, public navParams: NavParams, public nativeStorage: NativeStorage) {
  }
  
}
