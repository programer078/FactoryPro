import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { IonContent, IonIcon, IonCol, IonGrid, IonRow, IonList } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../core/shared/component/header/header.component";
import { ImgComponent } from "../../core/shared/component/img/img.component";
import { CardComponent } from "../../core/shared/component/card/card.component";
import { RatingboxComponent } from "../../core/shared/component/ratingbox/ratingbox.component";
import { ButtonComponent } from "../../core/shared/component/button/button.component";
import { ServicesCardComponent } from "../../core/shared/component/services-card/services-card.component";
import { IndustryComponent } from "../../core/shared/component/industry/industry.component";
import { ParsingplanComponent } from "../../core/shared/component/parsingplan/parsingplan.component";
import { SatisfiedclientComponent } from "../../core/shared/component/satisfiedclient/satisfiedclient.component";
import { FoterComponent } from 'src/app/core/shared/component/foter/foter.component';
import { img } from 'src/app/core/interface/img.interface';
import { initiatives } from 'src/app/core/interface/initiatives.interface';
import { rating } from 'src/app/core/interface/rating.interface';
import { setadvanced } from 'src/app/core/interface/setadanced.interface';
import { about } from 'src/app/core/interface/about.interface';
import { process } from 'src/app/core/interface/process.interface';
import { DataserviceService } from 'src/app/core/const/dataservice.service';
import { ColorDirective } from 'src/app/core/drective/color.directive';
import { ArrowIconDirective } from 'src/app/core/drective/arrow-icon.directive';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonContent, FoterComponent, HeaderComponent, IonIcon, IonRow, IonGrid,ColorDirective,
    ImgComponent, CardComponent, RatingboxComponent, ButtonComponent,
    ServicesCardComponent, IndustryComponent, ParsingplanComponent,
    SatisfiedclientComponent,ArrowIconDirective
  ],
})
export class HomePage {
  public process = signal<process[]>([
    
  ]);

  public about = signal<about[]>([
   
  ]);

  public setadvanced = signal<setadvanced[]>([
   
  ]);

  public rating = signal<rating[]>([
   
  ]);

  public img = signal<img[]>([
   
  ]);

  public initiatives = signal<initiatives[]>([
   
  ]);

  isMenuOpen = signal<boolean>(false);
  public router=inject(Router)
  public dataService=inject(DataserviceService)
  ngOnInit() {
    this.process.set(this.dataService.getprocess());
    this.about.set(this.dataService.getabout());
    this.setadvanced.set(this.dataService.getadvanced());
    this.rating.set(this.dataService.getrating());
    this.img.set(this.dataService.getimg());
    this.initiatives.set(this.dataService.getinitiatives());  
  }
  public toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }
  video(){
    this.router.navigate(['/video'])
  }

  constructor() {}


  
  selectedCurrency: string = 'USD'; // Default currency

  // Function to update currency from Header
  updateCurrency(newCurrency: string) {
    this.selectedCurrency = newCurrency;
  }
}