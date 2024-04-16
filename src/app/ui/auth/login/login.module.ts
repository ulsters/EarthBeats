import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: '', component: LoginComponent}
    ]),
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
