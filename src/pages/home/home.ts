import { HelpModal } from './modal/help-modal.component';
import { ModalController } from 'ionic-angular';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  openModal(){
    let helpModal = this.modalCtrl.create(HelpModal);
    helpModal.present();
  }
}
