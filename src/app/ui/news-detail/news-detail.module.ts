import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsDetailComponent } from './news-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NewsDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'news-detail/:newsId', component: NewsDetailComponent } 
    ])
  ],
  exports: [
    NewsDetailComponent
  ]
})
export class NewsDetailModule { }
