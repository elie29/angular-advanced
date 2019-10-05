import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  onRegister(): void {
    this.message = '';
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
