import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Prise de RDV',
      url: '/rdv',
      icon: 'list'
    },
    {
      title: 'Noter Station',
      url: '/evaluation',
      icon: 'list'
    },
    {
      title: 'Chat',
      url: '/chat-room',
      icon: 'list'
    },
    {
      title: 'Espace Post',
      url: '/post',
      icon: 'list'
    },
    {
      title: 'Nos Actualité',
      url: '/events',
      icon: 'list'
    },
    {
      title: 'Découvrez nos Cadeaux',
      url: '/cadeaux',
      icon: 'list'
    },
    {
      title: 'La Station La Plus Proche',
      url: '/station',
      icon: 'list'
    },
    {
      title: 'Jeux & Divertissement',
      url: '/jeux',
      icon: 'list'
    },
    {
      title: 'Log Out',
      url: '/',
      icon: 'paper-plane'
    }
    
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
