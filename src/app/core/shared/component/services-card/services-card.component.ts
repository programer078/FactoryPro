import { Component, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { Card } from 'src/app/core/interface/card.interface';
@Component({
  selector: 'app-services-card',
  standalone: true,
  templateUrl: './services-card.component.html',
  styleUrls: ['./services-card.component.scss'],
  imports: [IonIcon],
})
export class ServicesCardComponent implements OnInit {
  public cardsection: Card[] = [
    {
      img: '../../../assets/imgs/custommanifucther.png',
      tital: 'Custom Manufacturing Solution',
    },
    {
      img: '../../../assets/imgs/inderstarilautomatic.png',
      tital: 'Industrial Automation And Robotics',
    },
    {
      img: '../../../assets/imgs/productdisign.png',
      tital: 'Product Design And Prototyping',
    },
    {
      img: '../../../assets/imgs/equiment maintenance.png',
      tital: 'Equipment Maintenance Support',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
