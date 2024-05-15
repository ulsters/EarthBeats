import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Add this import statement
import { ModifyUserComponent } from './modify-user.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ModifyUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: ModifyUserComponent}
    ])
  ],
  exports: [
    ModifyUserComponent,
  ]
})
export class ModifyUserModule { }
