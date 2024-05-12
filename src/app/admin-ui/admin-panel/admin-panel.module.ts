import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';





@NgModule({
  declarations: [
    AdminPanelComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    AdminPanelComponent,
  ]
})
export class AdminPanelModule { }
