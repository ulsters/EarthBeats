import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { ModifyNewsComponent } from './modify-news.component';

@NgModule({
  declarations: [
    ModifyNewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([ // Import RouterModule.forChild
      { path: '', component: ModifyNewsComponent }
    ])
  ],
  exports: [
    ModifyNewsComponent,
  ]
})
export class ModifyNewsModule { }