import { HelpModal } from './modal/help-modal.component';
import { ModalController } from 'ionic-angular';
import { Component } from '@angular/core';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public twitter: TwitterConnect) {

  }

  // Twitter Login Function
  login() {
    let onSuccess = function (response) {
      console.log(response);
    };
    let onError = function (response) {
      console.log(response);
    };

    this.twitter.login().then(onSuccess, onError);
  }
  // Open Informative Modal
  openModal() {
    let helpModal = this.modalCtrl.create(HelpModal);
    helpModal.present();
  }
}
