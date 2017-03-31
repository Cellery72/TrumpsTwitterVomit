//         File: Home Page Component
//         Date: 03-25-2017
//  Description: The home page is the first screen upon opening the app.
//               It contains a twitter login button & informative modal.

import { NavController, ModalController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { DashboardPage } from '../dashboard/dashboard';
import { HelpModal } from './modal/help-modal.component';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { TwitterUser } from '../../models/twitteruser.model';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {



  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public twitter: TwitterConnect, public nativeStorage: NativeStorage) {
    this.checkUserCredentials();
  }
  ngOnInit(): void {
    this.checkUserCredentials();
  }

  // Twitter Login Function
  public login() {
    let user = new TwitterUser(1, "Cellery72", "Secret", "Token", "");
    this.nativeStorage.setItem('currentUser', { id: user.getID(), username: user.getUsername() })
      .then(
      () => console.log('Stored item!'),
      error => console.error('Error storing item', error)
      );
    this.navCtrl.push(DashboardPage, { "user": user });
    //this.twitter.login().then(this.onSuccess, this.onError);
  }
  public onSuccess(user): void {
    console.log(this);
    //let x = this.myStorage.saveUser(user);
    //this.navCtrl.setRoot(HomePage);
    this.navCtrl.push(DashboardPage, { "user": user });
  }
  public onError(response): void {
    console.log(response);
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
