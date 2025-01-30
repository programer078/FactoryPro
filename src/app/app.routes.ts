import { Routes } from '@angular/router';
import { ParsingplanComponent } from './core/shared/component/parsingplan/parsingplan.component';
import { PriplanComponent } from './core/shared/component/priplan/priplan.component';
import { ContactusComponent } from './core/shared/component/contactus/contactus.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'priplan',
    component:PriplanComponent,
  },
  {
    path:'contactus',
    component:ContactusComponent
  }
  
];
