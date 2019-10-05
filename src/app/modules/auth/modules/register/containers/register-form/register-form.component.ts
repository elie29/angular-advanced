import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent {
  form: FormGroup = this.fb.group({
    name: this.fb.group({
      firstName: [''],
      lastName: ['']
    }),
    email: [''],
    password: [''],
    languages: this.fb.array(['FR', 'EN'])
  });

  // Error message
  message: string;

  constructor(private fb: FormBuilder) {}

  get languages(): FormArray {
    return this.form.get('languages') as FormArray;
  }

  addLanguage(): void {
    this.languages.push(this.fb.control(''));
  }

  removeLanguage(index: number): void {
    this.languages.removeAt(index);
  }

  onRegister(): void {
    this.message = '';
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
