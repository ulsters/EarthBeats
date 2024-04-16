import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: '', component: RegisterComponent}
    ]),
  ],
  exports:[
    RegisterComponent
  ]
})
export class RegisterModule { }
