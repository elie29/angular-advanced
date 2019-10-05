import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { RootComponent } from './containers/root/root.component';
import { ArticlesModule } from './modules/articles/articles.module';
import { AuthModule } from './modules/auth/auth.module';

const ROUTES: Routes = [
  // fallback
  { path: '**', redirectTo: 'articles' }
];

@NgModule({
  declarations: [RootComponent, HeaderComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {
      preloadingStrategy: PreloadAllModules
    }),
    ArticlesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {}
