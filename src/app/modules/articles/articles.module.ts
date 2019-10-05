import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ArticleItemMetaComponent } from './components/article-item-meta/article-item-meta.component';
import { ArticleItemVotesComponent } from './components/article-item-votes/article-item-votes.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { ArticlesComponent } from './containers/articles/articles.component';
import { DynamicLabelDirective } from './directives/dynamic-label.directive';
import { FibonacciPipe } from './pipes/fibonacci.pipe';
import { ArticlesService } from './services/articles.service';

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleFormComponent,
    ArticleItemComponent,
    ArticleItemVotesComponent,
    ArticleItemMetaComponent,
    FibonacciPipe,
    DynamicLabelDirective
  ],
  imports: [CommonModule, FormsModule],
  exports: [ArticlesComponent],
  providers: [ArticlesService]
})
export class ArticlesModule {}
