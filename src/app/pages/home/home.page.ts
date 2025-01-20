import { Component, Input ,} from '@angular/core';
import { IonContent,IonIcon,IonCol,IonGrid,IonRow,IonList, } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../core/shared/component/header/header.component";
import { ImgComponent } from "../../core/shared/component/img/img.component";
import { CardComponent } from "../../core/shared/component/card/card.component";
import { RatingboxComponent } from "../../core/shared/component/ratingbox/ratingbox.component";
import { ButtonComponent } from "../../core/shared/component/button/button.component";
import { ServicesCardComponent } from "../../core/shared/component/services-card/services-card.component";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, HeaderComponent, IonIcon, IonRow, IonGrid,  ImgComponent, CardComponent, RatingboxComponent, ButtonComponent, ServicesCardComponent],
})
export class HomePage {
  isMenuOpen = false;

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}

  constructor() {}
}
