import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule.forChild([
      {path: '', component: RegisterComponent}
    ]),
  ],
  exports:[
    RegisterComponent
  ]
})
export class RegisterModule { }
