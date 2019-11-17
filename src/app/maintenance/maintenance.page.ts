import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.page.html',
  styleUrls: ['./maintenance.page.scss'],
})
export class MaintenancePage implements OnInit {

  constructor(private alertController: AlertController,private router: Router) { }

  ngOnInit() {
  }

  async valider(form){
    const alert = await this.alertController.create({
      header: "Vous Allez recevoir un email qui contient la confirmation et le temps exacte de votre Rendez-Vous.",
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
