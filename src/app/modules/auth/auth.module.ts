import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: 'auth',
    canActivate: [], // Access allowed for logged out users
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      {
        path: 'login',
        loadChildren: () =>
          import('./modules/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./modules/register/register.module').then(
            m => m.RegisterModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  providers: []
})
export class AuthModule {}
