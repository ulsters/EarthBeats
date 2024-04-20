import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingModule } from './landing/landing.module';
import { NewsModule } from './news/news.module';
import { SearchModule } from './search/search.module';
import { MapModule } from './map/map.module';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



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
    HttpClientModule
  ],
  exports:[
    LandingModule,
    NewsModule,
    SearchModule,
    MapModule,
    AuthModule
  ]
  
})
export class UiModule { }