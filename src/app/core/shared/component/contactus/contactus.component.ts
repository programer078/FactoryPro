import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ImgComponent } from "../img/img.component";
import { IonContent, IonHeader, IonTitle, IonToolbar,IonIcon } from '@ionic/angular/standalone';
import { FoterComponent } from "../foter/foter.component";
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputfieldComponent } from "../inputfield/inputfield.component";
@Component({
  selector: 'app-contactus',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
  imports: [HeaderComponent, ImgComponent, IonContent, IonIcon, FoterComponent, CommonModule, ReactiveFormsModule, InputfieldComponent],
})
export class ContactusComponent  implements OnInit {
  contactForm = new FormGroup({
    formControlFirstName: new FormControl('', Validators.required),
    formControlLastName: new FormControl('', Validators.required),
    formControlEmail: new FormControl('', [Validators.required, Validators.email]),
    formControlPhone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    formControlMessage: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
      alert('Form submitted successfully!');
    }
  }
  constructor() { }

  ngOnInit() {}

}
