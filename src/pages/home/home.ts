import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SelectLanguagePage } from '../select-language/select-language';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private selectedLanguage: string = "";

  constructor(public navCtrl: NavController, private modalController: ModalController) {

  }

  openModal(){
    let modal = this.modalController.create(SelectLanguagePage);
    modal.onDidDismiss(response => {
      this.selectedLanguage = response === 'es' ? 'Español': 'English';
    });
    modal.present();
  }

}
