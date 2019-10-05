import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterFormComponent } from './containers/register-form/register-form.component';

const ROUTES: Routes = [{ path: '', component: RegisterFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  declarations: [RegisterFormComponent]
})
export class RegisterModule {}
