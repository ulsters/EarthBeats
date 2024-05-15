import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Add this import statement
import { CreateUserComponent } from './create-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: CreateUserComponent}
    ])
  ],
  exports: [
    CreateUserComponent,
  ]
})
export class CreateUserModule { }