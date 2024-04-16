import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: NewsComponent}
    ])
  ],
  exports: [
    NewsComponent
  ]
})
export class NewsModule { }
