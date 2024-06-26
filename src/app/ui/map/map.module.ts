import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { RouterModule } from '@angular/router';
import axios from 'axios';
import { Observable } from 'rxjs';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild([
      {path: '', component: MapComponent}
    ])
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule {

 }
