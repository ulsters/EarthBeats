import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { FooterModule } from './footer/footer.module';
import { NavbarModule } from './navbar/navbar.module';



@NgModule({
  declarations: [],
  imports: [
    FooterModule,
    NavbarModule
  ],
  exports:[
    FooterModule,
    NavbarModule
   
  ]
})
export class ComponentsModule { }
