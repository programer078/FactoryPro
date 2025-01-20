import { Component, OnInit } from '@angular/core';
import { IonContent,IonIcon,IonCol,IonGrid,IonRow,IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ratingbox',
  standalone:true,
  templateUrl: './ratingbox.component.html',
  styleUrls: ['./ratingbox.component.scss'],
  imports:[IonIcon]
})
export class RatingboxComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
