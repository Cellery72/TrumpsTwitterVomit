//         File: Home Page Component
//         Date: 03-25-2017
//  Description: The home page is the first screen upon opening the app.
//               It contains a twitter login button & informative modal.

import { NavController, ModalController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { Component } from '@angular/core';
import { DashboardPage } from '../dashboard/dashboard';
import { HelpModal } from './modal/help-modal.component';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { TwitterService } from '../../providers/twitter.service';
import { TwitterUser } from '../../models/twitteruser.model';
import { NativeStorage } from '@ionic-native/native-storage';


@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {
  private loading: Loading;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public twitter: TwitterConnect, 
  public twitterSrv: TwitterService, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }
 
login() {
    //temp user for web testing
      let temp: TwitterUser = new TwitterUser(1, "Cellery72", "secret", "token", "");
    this.navCtrl.push(DashboardPage, { "user": temp });
    
    //using twitter connect on mobile
    // this.showLoading();
    // this.twitter.login().then((data) => {
    //   this.onSuccess(data);
    // }, error => {
    //   this.onError(error);
    // })
  }


  onSuccess(response) {
    console.log("success:", response);
     let _user = new TwitterUser(response.userId, response.userName, response.secret, response.token, "");
     this.nativeStorage.setItem('currentUser', { id: _user.getID(), username: _user.getUsername() })
      .then(
      () => console.log('Stored item!'),
      error => console.error('Error storing item', error)
      );
      this.navCtrl.push(DashboardPage, { "user": _user})
    setTimeout(() => {
        this.loading.dismiss();
      });
    // this.twitterSrv.signIn(_user);
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

