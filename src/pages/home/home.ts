//         File: Home Page Component
//         Date: 03-25-2017
//  Description: The home page is the first screen upon opening the app.
//               It contains a twitter login button & informative modal.

import { NavController, ModalController } from 'ionic-angular';
import { Component } from '@angular/core';
import { DashboardPage } from '../dashboard/dashboard';
import { HelpModal } from './modal/help-modal.component';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { TwitterUser } from '../../models/twitteruser.model';


@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public twitter: TwitterConnect) {
  }

  // Twitter Login Function
  login() {
    let onSuccess = function (user) {
      console.log(user);
    }
    let onError = function (response) {
      console.log(response);
    }


    let temp: TwitterUser = new TwitterUser(1, "Cellery72", "secret", "token", "");

    //this.twitter.login().then(onSuccess, onError);
    this.navCtrl.push(DashboardPage, { "user": temp });
  }

  // Open Informative Modal
  openModal() {
    console.log('hello');
    let helpModal = this.modalCtrl.create(HelpModal);
    helpModal.present();
  }
}
