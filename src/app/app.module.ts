import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RootComponent } from './containers/root/root.component';
import { ArticlesModule } from './modules/articles/articles.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [RootComponent, HeaderComponent],
  imports: [BrowserModule, ArticlesModule],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {}
