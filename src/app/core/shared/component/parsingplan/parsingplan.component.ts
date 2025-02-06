import { Component, OnInit,Input } from '@angular/core';
import { IonContent,IonIcon,IonCol,IonGrid,IonRow,IonList, } from '@ionic/angular/standalone';
import { CurrencyConversionPipe } from 'src/app/currency-conversion-pipe.pipe';
@Component({
  selector: 'app-parsingplan',
  standalone:true,
  templateUrl: './parsingplan.component.html',
  styleUrls: ['./parsingplan.component.scss'],
  imports: [IonIcon,CurrencyConversionPipe ]
})
export class ParsingplanComponent  implements OnInit {

  constructor() {}
  @Input() selectedCurrency: string = '';
  planPrice: number = 60; // Default price in USD
 
 public ngOnInit():void {}

}
