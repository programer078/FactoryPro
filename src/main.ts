import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules, withHashLocation } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { addIcons, } from 'ionicons';
import { routes } from './app/app.routes';
import { menuOutline, closeOutline,trendingUpOutline ,arrowForwardOutline,settingsOutline,starOutline} from 'ionicons/icons';
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
  'star':starOutline
});
