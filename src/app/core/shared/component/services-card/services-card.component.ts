import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonIcon, } from '@ionic/angular/standalone';
import { Card } from 'src/app/core/interface/card.interface';
@Component({
  selector: 'app-services-card',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './services-card.component.html',
  styleUrls: ['./services-card.component.scss'],
  imports: [IonIcon],
})
export class ServicesCardComponent implements OnInit {
  
  public cardsection: Card[] = [
    {
     img: '../../../../../assets/imgs/custommanifucther.svg',
      tital: 'Manufacturing Solution',
    },
    {
      img: '../../../assets/imgs/inderstarilautomatic.svg',
      tital: 'Industrial Automation And Robotics',
    },
    {
      img: '../../../assets/imgs/productdisign.svg',
      tital: 'Product Design And Prototyping',
    },
    {
      img: '../../../assets/imgs/equiment maintenance.svg',
      tital: 'Equipment Maintenance Support',
    },
  ];
 public ngOnInit():void {}
}
