import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './containers/login-form/login-form.component';

const ROUTES: Routes = [{ path: '', component: LoginFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  declarations: [LoginFormComponent]
})
export class LoginModule {}
