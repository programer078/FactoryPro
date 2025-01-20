import { Component, OnInit,Input } from '@angular/core';
import { IonContent,IonIcon,IonCol,IonGrid,IonRow,IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-button',
  standalone:true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports:[IonList,IonIcon]
})
export class ButtonComponent  implements OnInit {
  @Input() text: string = ''; 
  constructor() { }

  ngOnInit() {}

}
