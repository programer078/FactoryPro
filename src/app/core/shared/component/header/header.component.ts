import { Component, OnInit } from '@angular/core';
import { IonContent,IonHeader,IonToolbar ,IonIcon} from '@ionic/angular/standalone';
import { ImgComponent } from "../img/img.component";

@Component({
  selector: 'app-header',
  standalone:true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonIcon,]
})
export class HeaderComponent  implements OnInit {
   isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  constructor() { }

  ngOnInit() {}

}
