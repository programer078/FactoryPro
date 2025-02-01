import { Component, OnInit, Input, signal } from '@angular/core';
import { IonIcon, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [IonList, IonIcon]
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
