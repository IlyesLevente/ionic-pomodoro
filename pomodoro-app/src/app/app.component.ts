import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TimerService } from './services/timer.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  tasks = [];

  public appPages = [
    {
      title: 'Hozzáad',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Lista',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Időmérő',
      url: '/timer',
      icon: 'clock'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private timerService: TimerService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.timerService.notificationTimer();
    });
  }
}
