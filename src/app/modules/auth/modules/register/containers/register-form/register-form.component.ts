import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { RegisterValidator } from '../../validators/register.valdiator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent {
  form: FormGroup = this.fb.group({
    name: this.fb.group(
      {
        firstName: [''],
        lastName: ['', Validators.maxLength(8)]
      },
      {
        validator: RegisterValidator.requiredName
      }
    ),
    email: ['', Validators.email, RegisterValidator.forbiddenEmail],
    password: ['', [Validators.required, RegisterValidator.strongPassword]],
    languages: this.fb.array(
      [this.addControlLanguage('FR'), this.addControlLanguage('EN')],
      Validators.compose([Validators.required, Validators.maxLength(5)])
    )
  });
  // Error message
  message: string;

  constructor(private fb: FormBuilder) {}

  get languages(): FormArray {
    return this.form.get('languages') as FormArray;
  }

  addLanguage(): void {
    this.languages.push(this.addControlLanguage());
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

  private addControlLanguage(lang: string = ''): AbstractControl {
    return this.fb.control(lang, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(4)
    ]);
  }
}
