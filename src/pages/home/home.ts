/**
 * File: Home Page Component
 * Date: 04-05-2017
 * Description: The home page is the first screen upon opening the app.
 * Authors: Justin Ellery and Amanda Field
 */      

import { NavController, ModalController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { Component } from '@angular/core';
import { DashboardPage } from '../dashboard/dashboard';
import { TrumpsTweetsPage } from '../trumps-tweets/trumps-tweets';
import { HelpModal } from './modal/help-modal.component';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {
  private loading: Loading;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public twitter: TwitterConnect, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public nativeStorage: NativeStorage) {
  }

   private ionViewWillEnter(){
     this.nativeStorage.getItem('currentUser')
      .then(
        user => {
          console.log('Welcome ' + JSON.stringify(user.userName))
          this.navCtrl.push(TrumpsTweetsPage)
        },
        error => console.log('User not found')
      );
    }

  login() {
    //using twitter connect on mobile
    this.showLoading();
    this.twitter.login().then((data) => {
      this.onSuccess(data);
    }, error => {
      this.onError(error);
    })
  }

/**
 * This function will take the res data from twitter login methods
 * and will add the data to a currentUser object,then store it in native storage
 * once the user has been stored, they are redirected to the dashboard screen
 * @param response - data returned from twitter login method
 */
  onSuccess(response) {
    console.log("success:", response)
    this.nativeStorage.setItem('currentUser', response)
      .then(
      () => {
        console.log('Stored user!')
        this.navCtrl.push(DashboardPage);
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

}

