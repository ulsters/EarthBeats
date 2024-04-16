import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    LoginModule,
    RegisterModule,
  ],

  exports : [
    LoginModule,
    RegisterModule
  ]
})
export class AuthModule { }
