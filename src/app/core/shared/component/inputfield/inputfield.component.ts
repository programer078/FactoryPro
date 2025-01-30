import { Component, Input, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inputfield',
  templateUrl: './inputfield.component.html',
  styleUrls: ['./inputfield.component.scss'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class InputfieldComponent {
  private _control = signal<FormControl>(new FormControl());
  private _type = signal<string>('text');
  private _placeholder = signal<string>('');

  @Input()
  set control(value: FormControl) {
    this._control.set(value);
  }
  get control(): FormControl {
    return this._control();
  }

  @Input()
  set type(value: string) {
    this._type.set(value);
  }
  get type(): string {
    return this._type();
  }

  @Input()
  set placeholder(value: string) {
    this._placeholder.set(value);
  }
  get placeholder(): string {
    return this._placeholder();
  }

  onBlur() {
    this.control.markAsTouched();
  }

  shouldShowError(): boolean {
    return this.control.invalid && (this.control.dirty || this.control.touched);
  }
}