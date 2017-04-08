//         File: Home Page Component
//         Date: 03-25-2017
//  Description: The home page is the first screen upon opening the app.

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TrumpsTweetsPage } from './../trumps-tweets/trumps-tweets';
import { TimedNotification } from '../../models/timednotification.model';
import { NativeStorage } from '@ionic-native/native-storage';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  public _user;
  private _notes: Array<TimedNotification>;
  private notification_count: number;
  private date: Date;

  // default constructor
  constructor(public navCtrl: NavController, public navParams: NavParams, public nativeStorage: NativeStorage, public notifications: LocalNotifications) {
    let notey = new TimedNotification(1, '12:00');
    // this._notes.push(notey);
    
  }
  ionViewWillEnter(){
    this.nativeStorage.getItem('currentUser')
      .then(user => {
          this._user = user
          if(user.notifications){
            this._notes = user.notifications.map(note => {
              return new TimedNotification(note.id, note.at.match(/([0-9][0-9]:[0-9][0-9])/g)[0])
            })     
          }else {
            this._notes = []
          }
          this.notification_count = this._notes.length;            
        }
      )
           //to check scheduled notifications
    this.notifications.getScheduledIds()
      .then(ids => {
        ids.forEach(id => {
          this.notifications.get(id)
            .then(notif => console.log(JSON.stringify(notif)))
        })
      })
  }

  private setDate(time) {
    let currentDate = new Date();
    let hours = time.split(':')[0]
    let minutes = time.split(':')[1]
    let newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hours - 4, minutes)
    return newDate;
  }

  private setNotifications() {
    let notifications = [];
    this._notes.map(note => {
      let at = this.setDate(note.getTime())
      let newNotification = {
        id: this._notes.indexOf(note)+1,
        title: 'Trump\'s Twitter Vomit',
        text: 'Check if Trump\'s saying something stupid again',
        icon: 'http://example.com/icon.png',
        at: at,
        every: 'day',
        sound: 'file://sound.mp3'
      }
      notifications.push(newNotification)
    })

    this.nativeStorage.setItem('currentUser', {id: this._user.id, userName: this._user.userName, token: this._user.secret, secret: this._user.token, notifications: notifications})
      .then(
        () => console.log('Updated notification\'s successfully'),
        error => console.error('Error updating user', error)
    );

    this.notifications.cancelAll().then(() => {
        this.notifications.schedule(notifications);
        notifications = [];
    })
 


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
        console.log(JSON.stringify(newNotification))
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
    //clear all notifications stored
    this.notifications.cancelAll()
      .then(
        () => console.log('Cleared all notifications'),
        error => console.error(error)
      )
    //remove currentUser from storage then pop navCtrl
    this.nativeStorage.clear()
      .then(
        () => console.log('User Data removed'),
        error => console.log('Error - ' + error)
      )
    this.navCtrl.pop();

  }


  //function to save notification settings and direct to the trumps-tweets page
  private save(): void {

    //do some saving
    this.setNotifications()
      
    //redirect to trumps tweets page
    this.navCtrl.push(TrumpsTweetsPage);

  }


  // Utility functions
  private pluralizeUsername(username: string): string {
    // determine the char sequence to pluralize usernames
    let returnVal = (username.substr(username.length - 1).toLowerCase() == "s") ? "'" : "'s";
    return username + returnVal;
  }
}
