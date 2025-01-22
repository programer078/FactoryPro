import { Component, OnInit,Input, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-innovativesolutioncard',
  standalone:true,
  templateUrl: './innovativesolutioncard.component.html',
  styleUrls: ['./innovativesolutioncard.component.scss'],
})
export class InnovativesolutioncardComponent  implements OnInit {
  private _backgroundColor = signal<string>('bg-transparent');
  private _imagePath = signal<string>('');
  private _title = signal<string>('');
  private _description = signal<string>('');

  @Input() set backgroundColor(value: string) {
    this._backgroundColor.set(value);
  }
  @Input() set imagePath(value: string) {
    this._imagePath.set(value);
  }
  @Input() set title(value: string) {
    this._title.set(value);
  }
  @Input() set description(value: string) {
    this._description.set(value);
  }

  // Getters for readonly signals
  get backgroundColor(): Signal<string> {
    return this._backgroundColor.asReadonly();
  }

  get imagePath(): Signal<string> {
    return this._imagePath.asReadonly();
  }

  get title(): Signal<string> {
    return this._title.asReadonly();
  }

  get description(): Signal<string> {
    return this._description.asReadonly();
  }
  constructor() { }

  ngOnInit() {}

}
