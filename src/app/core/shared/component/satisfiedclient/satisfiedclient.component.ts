import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
@Component({
  selector: 'app-satisfiedclient',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './satisfiedclient.component.html',
  styleUrls: ['./satisfiedclient.component.scss'],
  imports: [IonIcon]
})
export class SatisfiedclientComponent implements OnInit {
  private lastUrl: string = ''; 
  private router = inject(Router);
  public ngOnInit(): void {
    this.router.events.subscribe((event): void => {
      if (event instanceof NavigationEnd) {
        const currentUrl: string = this.router.url;
        
        if (this.shouldReload(currentUrl)) {
          window.location.reload();
        }

        this.lastUrl = currentUrl;
      }
    });
  }
  private shouldReload(currentUrl: string): boolean {
    return this.lastUrl !== '' && this.lastUrl !== currentUrl;
  }
}
