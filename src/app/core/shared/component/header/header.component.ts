import { Component, inject, OnInit, EventEmitter, Output } from '@angular/core';
import { IonContent,IonHeader,IonToolbar ,IonIcon,IonList} from '@ionic/angular/standalone';
import { ImgComponent } from "../img/img.component";
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CurrencyConversionPipe } from 'src/app/currency-conversion-pipe.pipe';
@Component({
  selector: 'app-header',
  standalone:true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonIcon,FormsModule]
})
export class HeaderComponent  implements OnInit {
 
   isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    
  }

  constructor() {}
  @Output() currencyChange = new EventEmitter<string>();

  onCurrencyChange(event: any) {
    this.currencyChange.emit(event.target.value);
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
