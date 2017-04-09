/**
 * File: Home Page Component
 * Date: 03-25-2017
 * Description: The home page is the first screen upon opening the app.
 * Authors: Justin Ellery and Amanda Field
 */ 

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
  private _note: TimedNotification;
  private date: Date;
  private enableNotification: Boolean;

  // default constructor
  constructor(public navCtrl: NavController, public navParams: NavParams, public nativeStorage: NativeStorage, private notifications: LocalNotifications) {
     this._note = new TimedNotification(1, '12:00')
  }

  /**
   * This function will retrieve the users information and sync the note object 
   * with the note object stored in native storage.
   */
  ionViewWillEnter(){
    //retrieve user information
    this.nativeStorage.getItem('currentUser')
      .then(user => {
          this._user = user
          if(user.notification){
            console.log('Notifications on: ', JSON.stringify(user.notification))
            this.enableNotification = true;
            //set note to saved note in storage
            this._note = new TimedNotification(user.notification.id, user.notification.at.match(/([0-9][0-9]:[0-9][0-9])/g)[0])
            if(user.notification.sound) this._note.setSound(true)
          }else{
            console.log('Notifications off')
            this.enableNotification = false;
          }       
        }
        this.notification_count = this._notes.length;
      });
  }
/**
 * This function will take a string interpretation of a time and split it up into an array 
 *   containing hours and minutes
 * A new current date will be created and then the hours and minutes will be set based 
 *   on the time string passed in
 * the hours will be the hours stored -4 to get the current time zone's hours
 * @param time - value is a string representing a time
 */
  private setDate(time) {
    let currentDate = new Date();
    let hours = time.split(':')[0]
    let minutes = time.split(':')[1]
    let newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hours - 4, minutes)
    return newDate;
  }


/**
 * This function will create a new local notification object based off of the note stored on this page.
 * The new notification will be set for the time and sound selected by the user
 * After the notification object is created, it will be passed into the schedule method of local notifications
 * The new notification information will be passed into native storage and set to the current user.
 */
  private setNotification() {
      let at = this.setDate(this._note.getTime())
      let newNotification = {
        id: this._note.getID(),
        title: 'Trump\'s Twitter Vomit',
        text: 'Check if Trump\'s saying something stupid again',
        icon: 'http://example.com/icon.png',
        at: at,
        every: 'day',
        sound: this._note.soundEnabled() ? 'res://platform_default' : null
      }

      // Add the notification to our array
      notifications.push(newNotification);

    });

    // save the currentUser property in local storage
    this.nativeStorage.setItem('currentUser', { id: this._user.id, userName: this._user.userName, token: this._user.secret, secret: this._user.token, notifications: notifications })
      .then(
      () => console.log('Updated notification\'s successfully'),
      error => console.error('Error updating user', error)
      );
    // schedule the array of notifications we've created
    this.notifications.schedule(notifications);

    //to check scheduled notifications - print them to console
    this.notifications.getScheduledIds()
      .then(ids => {
        ids.forEach(id => {
          this.notifications.get(id)
            .then(notif => console.log(JSON.stringify(notif)))
        })
      })
  }
  // Update the Notification Array upon Dropdown selection change
  private updateNotifications(): void {
    // grab the lastCount of notifications and the new count of notifications
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

  /**
   * This function will clear all data stored in local notifications and native storage, then will redirect back to 
   * the home page login screen
   */
  private logout(): void {
    //cancel all notifications stored
    this.notifications.cancelAll()
      .then(
        () => console.log('Cleared notification'),
        error => console.error(error)
      )
    //remove currentUser from storage then pop navCtrl
    this.nativeStorage.clear()
      .then(
      () => console.log('User Data removed'),
      error => console.log('Error - ' + error)
      )
    this.navCtrl.popToRoot();

  }


  /**
   * This function will call the setNotifications function and when complete will 
   * direct the user to the trumps tweets display page
   */
  private save(): void {

    //do some saving
    this.setNotification()
      
    //redirect to trumps tweets page
    this.navCtrl.push(TrumpsTweetsPage);

  }


  /**
   * This function will add pluralization to a given string
   * @param username - string to be pluralized
   */
  private pluralizeUsername(username: string): string {
    // determine the char sequence to pluralize usernames
    let returnVal = (username.substr(username.length - 1).toLowerCase() == "s") ? "'" : "'s";
    return username + returnVal;
  }
}
