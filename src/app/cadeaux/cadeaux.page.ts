import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cadeaux',
  templateUrl: './cadeaux.page.html',
  styleUrls: ['./cadeaux.page.scss'],
})
export class CadeauxPage implements OnInit {

  constructor(private alertController: AlertController,private router: Router) {}
  public pts =10000;

ngOnInit() {
  
}

async presentAlertConfirm(x) {
  if (x < this.pts){
  const alert = await this.alertController.create({
    header: 'Confirmer vous votre Cadeau ?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Oui',
        handler: () => {
          this.pts -= x;
          this.secondAlert();
        }
      }
    ]
  });

  await alert.present();
}
else{
  const alert = await this.alertController.create({
    header: "Vous devez choisir un cadeau inférieur ou égal à votre solde",
    buttons: [
      {
        text: 'OK!',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
        }
      }
    ]
  });

  await alert.present();
}
}

async secondAlert(){
  const alert = await this.alertController.create({
    header: "Vous Pouvez Prondre Votre Cadeaux d'une Station Total a l'aide de Votre code Rucu par E-mail ",
    buttons: [
      {
        text: 'OK!',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
        }
      }
    ]
  });

  await alert.present();
}

async presentAlertDon(x) {
  if (x < this.pts){
  const alert = await this.alertController.create({
    header: 'Confirmer vous votre Cadeau ?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Oui',
        handler: () => {
          this.pts -= x;
          this.thirdAlert();
        }
      }
    ]
  });

  await alert.present();
}
else{
  const alert = await this.alertController.create({
    header: "Vous devez choisir un cadeau inférieur ou égal à votre solde",
    buttons: [
      {
        text: 'OK!',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
        }
      }
    ]
  });

  await alert.present();
}
}
async thirdAlert(){
  const alert = await this.alertController.create({
    header: "Merci pour votre aide ",
    buttons: [
      {
        text: 'OK!',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
        }
      }
    ]
  });

  await alert.present();
}

}
