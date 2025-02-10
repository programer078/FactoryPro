import { Component, OnInit,Input } from '@angular/core';
import { IonContent,IonIcon,IonCol,IonGrid,IonRow,IonList,ModalController  } from '@ionic/angular/standalone';
import { CurrencyConversionPipe } from 'src/app/currency-conversion-pipe.pipe';
import { ModelComponent } from '../model/model.component';
@Component({
  selector: 'app-parsingplan',
  standalone:true,
  templateUrl: './parsingplan.component.html',
  styleUrls: ['./parsingplan.component.scss'],
  imports: [IonIcon,CurrencyConversionPipe ]
})
export class ParsingplanComponent  implements OnInit {
  constructor(private modalCtrl: ModalController) {}
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModelComponent,
     cssClass: 'custom-modal-class',
     componentProps: {
      price: this.planPrice, // Price pass kar rahe hain
      currency: this.selectedCurrency
    }
    });
    modal.present();
  
  }
  @Input() selectedCurrency: string = '';
  planPrice: number = 60; 
 
 public ngOnInit():void {}

}
