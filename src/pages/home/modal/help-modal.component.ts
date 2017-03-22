import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'help-modal',
  templateUrl: 'help-modal.component.html'
})
export class HelpModal {

  constructor(public viewCtrl: ViewController) {

  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
