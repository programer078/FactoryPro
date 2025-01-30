import { Component, CUSTOM_ELEMENTS_SCHEMA, Input ,} from '@angular/core';
import { IonContent,IonIcon,IonCol,IonGrid,IonRow,IonList, } from '@ionic/angular/standalone';
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

@Component({
  selector: 'app-home',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent,FoterComponent, HeaderComponent, IonIcon, IonRow, IonGrid, ImgComponent, CardComponent, RatingboxComponent, ButtonComponent, ServicesCardComponent, IndustryComponent, ParsingplanComponent, SatisfiedclientComponent],
})
export class HomePage {
  isMenuOpen = false;
 

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}

  constructor() {}
}
