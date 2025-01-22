import { Component, OnInit } from '@angular/core';
import { IonContent,IonIcon,IonCol,IonGrid,IonRow,IonList, } from '@ionic/angular/standalone';
import { ImgComponent } from '../img/img.component';
import { InnovativesolutioncardComponent } from "../innovativesolutioncard/innovativesolutioncard.component";
@Component({
  selector: 'app-industry',
  standalone:true,
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.scss'],
imports: [ImgComponent, IonIcon, InnovativesolutioncardComponent],

})
export class IndustryComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
