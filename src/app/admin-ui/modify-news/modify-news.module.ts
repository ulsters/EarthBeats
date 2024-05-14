import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { ModifyNewsComponent } from './modify-news.component';

@NgModule({
  declarations: [
    ModifyNewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ModifyNewsComponent }
    ]),
    ReactiveFormsModule // Import ReactiveFormsModule here
  ],
  exports: [
    ModifyNewsComponent,
  ]
})
export class ModifyNewsModule { }
