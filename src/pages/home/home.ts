//         File: Home Page Component
//         Date: 03-25-2017
//  Description: The home page is the first screen upon opening the app.
//               It contains a twitter login button & informative modal.

import { NavController, ModalController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { Component } from '@angular/core';
import { DashboardPage } from '../dashboard/dashboard';
import { HelpModal } from './modal/help-modal.component';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { TwitterUser } from '../../models/twitteruser.model';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {
  private loading: Loading;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public twitter: TwitterConnect, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public nativeStorage: NativeStorage) {
  }


  login() {
    //temp user for web testing
    //let temp: TwitterUser = new TwitterUser(1, "Cellery72", "secret", "token", "");
    //this.navCtrl.push(DashboardPage, { "user": temp });

    //using twitter connect on mobile
    this.showLoading();
    this.twitter.login().then((data) => {
      this.onSuccess(data);
    }, error => {
      this.onError(error);
    })
  }


  onSuccess(response) {
    console.log("success:", response)
    this.nativeStorage.setItem('currentUser', response)
      .then(
      () => {
        console.log('Stored user!')
        this.navCtrl.push(DashboardPage, { "user": response })
      },
      error => console.error('Error storing user', error)
      );

    setTimeout(() => {
      this.loading.dismiss();
    });
  }

  onError(response) {
    this.showError(response);
  }
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }


  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });
    let alert = this.alertCtrl.create({
      title: 'Fail',
      message: text + '\nMake sure to setup Twitter account on your device.',
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  // Open Informative Modal
  openModal() {
    let helpModal = this.modalCtrl.create(HelpModal);
    helpModal.present();
  }

  public checkUserCredentials(): void {
    let user: TwitterUser;
    this.nativeStorage.getItem('currentUser')
      .then(
      data => user = data,
      error => console.log(error)
      );
  }
}

