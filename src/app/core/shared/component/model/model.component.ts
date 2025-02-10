import { Component, OnInit ,Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyConversionPipe } from 'src/app/currency-conversion-pipe.pipe';
import {IonIcon,  ModalController,} from '@ionic/angular/standalone';
@Component({
  selector: 'app-model',
  standalone:true,
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss'],
  imports: [FormsModule, IonIcon, CurrencyConversionPipe],
})
export class ModelComponent  implements OnInit {
  @Input() price!: number;
  @Input() currency!: string;
    @Input() selectedCurrency: string = '';
    planPrice: number = 60; 
   
  name!: string;
  ModalController: any;
  closeModal() {
    return this.modalCtrl.dismiss(null, 'cancel');

  }
  constructor(private modalCtrl: ModalController) {}

  
  ngOnInit() {}

}
