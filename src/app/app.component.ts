import { Component } from '@angular/core';
import axios from 'axios';
import { environment } from '../environments/environment';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log("set axios defaults");
      console.log(environment.base_url);
      axios.defaults.baseURL = environment.base_url;
      axios.defaults.headers.common['Authorization'] = `Bearer ${environment.access_token}`;
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
