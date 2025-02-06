import { Component, OnInit } from '@angular/core';
import { ImgComponent } from "../img/img.component";
import { IonContent,IonIcon,IonCol,IonGrid,IonRow,IonList, } from '@ionic/angular/standalone';
import { ArrowIconDirective } from 'src/app/core/drective/arrow-icon.directive';
@Component({
  selector: 'app-foter',
  standalone:true,
  templateUrl: './foter.component.html',
  styleUrls: ['./foter.component.scss'],
  imports: [ImgComponent,IonIcon,ArrowIconDirective],
})
export class FoterComponent  implements OnInit {
  ngOnInit(): void {}

}
