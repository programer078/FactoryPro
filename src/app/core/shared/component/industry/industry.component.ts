import { Component, OnInit } from '@angular/core';
import { IonContent,IonIcon,IonCol,IonGrid,IonRow,IonList, } from '@ionic/angular/standalone';
import { ImgComponent } from '../img/img.component';
import { InnovativesolutioncardComponent } from "../innovativesolutioncard/innovativesolutioncard.component";
import { ArrowIconDirective } from 'src/app/core/drective/arrow-icon.directive';
@Component({
  selector: 'app-industry',
  standalone:true,
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.scss'],
imports: [ImgComponent, IonIcon, InnovativesolutioncardComponent,ArrowIconDirective],

})
export class IndustryComponent  implements OnInit {
 public ngOnInit():void {}

}
