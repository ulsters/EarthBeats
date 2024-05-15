import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Add this import
import { ManageUsersComponent } from './manage-users.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ManageUsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ManageUsersComponent }
    ]),
    ReactiveFormsModule
  ],
  exports: [
    ManageUsersComponent,
  ]
})
export class ManageUsersModule { }