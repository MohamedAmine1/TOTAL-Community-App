import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.page.html',
  styleUrls: ['./evaluation.page.scss'],
})
export class EvaluationPage implements OnInit {

  constructor(private alertController: AlertController,private router: Router) { }

  ngOnInit() {
  }

  async noter(form){
    const alert = await this.alertController.create({
      header: "Merci Pour Votre Avis, Nous Allons le Prendre on Considération",
      buttons: [
        {
          text: 'OK!',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.router.navigate(['/home']);
          }
        }
      ]
    });
  
    await alert.present();
    
  }

}
