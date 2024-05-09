import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    LoginModule,
    RegisterModule,
    ComponentsModule,
    RouterModule,
  ],

  exports : [
    LoginModule,
    RegisterModule,
    RouterModule,
  ]
})
export class AuthModule { }
