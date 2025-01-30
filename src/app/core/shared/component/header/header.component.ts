import { Component, inject, OnInit } from '@angular/core';
import { IonContent,IonHeader,IonToolbar ,IonIcon,IonList} from '@ionic/angular/standalone';
import { ImgComponent } from "../img/img.component";
import { Router } from '@angular/router';
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
  parsingplan()
  {
   this.router.navigate(['/priplan'])
  }
  home() {
    this.router.navigate(['/home'])
  }
  cotect() {
    this.router.navigate(['/contactus'])
  }
  public router=inject(Router)

  ngOnInit() {}

}
