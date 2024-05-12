import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminPanelModule } from './admin-panel/admin-panel.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminPanelModule,
    HttpClientModule
  ],
  exports:[
    AdminPanelModule
  ]
}
)
export class AdminUiModule { }
