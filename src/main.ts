import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules, withHashLocation } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { addIcons, } from 'ionicons';

import { register } from 'swiper/element/bundle';
register();
import { routes } from './app/app.routes';
import { menuOutline, closeOutline,trendingUpOutline ,logoFacebook,arrowForwardOutline,settingsOutline,starOutline,playCircleOutline, calendar, calendarOutline, cashOutline, timeOutline, arrowBack, arrowBackOutline, logoTwitter, logoInstagram,chevronDown, caretDown, callOutline, mailOutline, locationOutline} from 'ionicons/icons';
import { AppComponent } from './app/app.component';
import { HashLocationStrategy } from '@angular/common';
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideRouter(routes , withHashLocation()),
  ],
  
});
addIcons({
  'menu': menuOutline,
  'close': closeOutline,
  'trending':trendingUpOutline,
  'arrow-forward-outline':arrowForwardOutline,
  'settings-outline':settingsOutline,
  'star':starOutline,
  'calendar-outline' :calendarOutline,
  'play-circle-outline': playCircleOutline,
  'cashOutline':cashOutline,
  'time-outline':timeOutline,
  'arrow-back-outline':arrowBackOutline,
  'logo-facebook':logoFacebook ,
  'logo-twitter':logoTwitter,
  'logo-instagram':logoInstagram,
  'caret-down-outline':caretDown,
  'call-outline':callOutline,
  'mail-outline':mailOutline,
  'location-outline':locationOutline,
});
