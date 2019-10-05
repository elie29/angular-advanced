import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  @ViewChild('f', { static: false }) form: FormGroup;

  message = '';

  onLogin(): void {
    console.log(this.form.value);
    this.form.reset();
    this.message = 'Invalid email or password';
  }
}
