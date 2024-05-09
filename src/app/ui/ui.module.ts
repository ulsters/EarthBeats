import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingModule } from './landing/landing.module';
import { NewsModule } from './news/news.module';
import { SearchModule } from './search/search.module';
import { MapModule } from './map/map.module';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewsDetailModule } from './news-detail/news-detail.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LandingModule,
    NewsModule,
    SearchModule,
    MapModule,
    AuthModule,
    FormsModule,
    NewsDetailModule,
    HttpClientModule
  ],
  exports:[
    LandingModule,
    NewsModule,
    NewsDetailModule,
    SearchModule,
    MapModule,
    AuthModule,

  ]
  
})
export class UiModule { }