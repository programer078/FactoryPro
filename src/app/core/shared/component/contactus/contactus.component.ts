import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ImgComponent } from "../img/img.component";
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { FoterComponent } from "../foter/foter.component";
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputfieldComponent } from "../inputfield/inputfield.component";
import { ToastController } from '@ionic/angular/standalone';
interface ContactFormControls {
  formControlFirstName: FormControl<string | null>;
  formControlLastName: FormControl<string | null>;
  formControlEmail: FormControl<string | null>;
  formControlPhone: FormControl<string | null>;
  formControlMessage: FormControl<string | null>;
  [key: string]: FormControl<string | null>;
}

@Component({
  selector: 'app-contactus',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
  imports: [HeaderComponent,ImgComponent,IonContent,IonIcon,FoterComponent,CommonModule,ReactiveFormsModule,InputfieldComponent],
  standalone: true
})
export class ContactusComponent implements OnInit {
  showModal = false;
  modalFormIndex: number | null = null; 
  newFieldLabel = '';
  contactForms: {
    form: FormGroup<ContactFormControls>;
    additionalFields: { label: string; controlName: string }[];}[] = [];
  constructor(private toastController: ToastController, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.addNewForm();
  }
  initializeForm(existingFields: { label: string; controlName: string }[] = []): FormGroup<ContactFormControls> {
    const form = this.fb.group({
      formControlFirstName: ['', Validators.required],
      formControlLastName: ['', Validators.required],
      formControlEmail: ['', [Validators.required, Validators.email]],
      formControlPhone: ['', Validators.required],
      formControlMessage: ['', Validators.required]
    }) as FormGroup<ContactFormControls>;
    existingFields.forEach(field => {
      form.addControl(field.controlName, new FormControl('', Validators.required));
    });
    return form;
  }
  removeForm(index: number) {
    if (this.contactForms.length > 1) {
      this.contactForms.splice(index, 1);
    }
  }
    addNewForm() {
    let lastForm = this.contactForms.length ? this.contactForms[this.contactForms.length - 1] : null;
    let newForm = {
      form: this.initializeForm(lastForm ? lastForm.additionalFields : []), 
      additionalFields: lastForm ? [...lastForm.additionalFields] : []
    };
    this.contactForms.push(newForm);
  }
  openModal(formIndex: number) {
    this.modalFormIndex = formIndex;
    this.showModal = true;
  }
  addNewField() {
    if (!this.newFieldLabel.trim() || this.modalFormIndex === null) return;
    const currentFormObj = this.contactForms[this.modalFormIndex];
    const controlName = `additionalField_${currentFormObj.additionalFields.length}`;
    currentFormObj.form.addControl(controlName, new FormControl('', Validators.required));
    currentFormObj.additionalFields.push({ controlName, label: this.newFieldLabel });
    this.newFieldLabel = '';
    this.showModal = false;
    this.modalFormIndex = null;
  }
  removeField(formIndex: number, fieldIndex: number) {
    const currentFormObj = this.contactForms[formIndex];
    const fieldToRemove = currentFormObj.additionalFields[fieldIndex];
    (currentFormObj.form as FormGroup).removeControl(fieldToRemove.controlName);
    currentFormObj.additionalFields.splice(fieldIndex, 1);
  }
  isFormInvalid(form: FormGroup<ContactFormControls>): boolean {
    return form.invalid;
  }
  onSubmit(formIndex: number) {
    const formObj = this.contactForms[formIndex];
    if (formObj.form.valid) {
      console.log('Form Submitted:', formObj.form.value);
      this.presentToast();
      formObj.form.reset();
      formObj.additionalFields = [];
      this.contactForms[formIndex].form = this.initializeForm();
    }
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Form submitted successfully!',
      duration: 2000,
      position: 'top',
      color: 'success',
    });
    await toast.present();
  }
  onInputChange(event: Event): void {
    this.newFieldLabel = (event.target as HTMLInputElement).value;
  }
}
