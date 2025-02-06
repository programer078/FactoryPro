import { Component, OnInit, Input, signal } from '@angular/core';
import { IonIcon, IonList } from '@ionic/angular/standalone';
import { ColorDirective } from 'src/app/core/drective/color.directive';
import { ArrowIconDirective } from 'src/app/core/drective/arrow-icon.directive';
@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [IonList,ColorDirective,ArrowIconDirective]
})
export class ButtonComponent implements OnInit {
  private _text = signal<string>(''); 
  @Input() 
  set text(value: string) {
    this._text.set(value); 
  }
  get text(): string {
    return this._text();
  }
  ngOnInit(): void {}
 
}
