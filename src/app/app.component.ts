import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { SplashScreen } from '@capacitor/splash-screen';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
  providers:[Location]
})
export class AppComponent implements OnInit {
  private setupBackButton() {
    this.platform.backButton.subscribeWithPriority(10, async () => {
      const currentUrl = this.router.url;
      if (currentUrl === '/home' || currentUrl === '/') {
        if (window.confirm('Exit the app?')) {
          App.exitApp();
        }
      } else {
        this.location.back();
      }
    });
  }
  ngOnInit() {
    this.platform.ready().then(() => {
      this.setupBackButton();
    });
  }
  constructor(   private platform: Platform,
    private router: Router,
    private location: Location) {
    this.initializeApp();
    
  }
  initializeApp() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 5000); 
  }
}
