import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild([
      {path: '', component: SearchComponent}
    ])
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
