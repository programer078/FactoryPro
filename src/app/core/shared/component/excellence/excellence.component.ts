import { Component, OnInit } from '@angular/core';
import { IonContent,IonIcon,IonCol,IonGrid,IonRow,IonList } from '@ionic/angular/standalone';
import { HeaderComponent } from "../header/header.component";
import { ImgComponent } from '../img/img.component';
@Component({
  selector: 'app-excellence',
  standalone:true,
  templateUrl: './excellence.component.html',
  styleUrls: ['./excellence.component.scss'],
  imports: [IonContent, HeaderComponent,IonIcon,IonRow,IonCol,IonGrid,ImgComponent,IonList]
})
export class ExcellenceComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
