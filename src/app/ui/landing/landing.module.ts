import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    LandingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule

  ],
  exports: [
    LandingComponent,

  ]
})
export class LandingModule { }
