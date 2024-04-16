import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './ui/landing/landing.component';

const routes: Routes = [
    {path: '', component: LandingComponent},
    {path:"search" , loadChildren: () => import('./ui/search/search.module').then(module => module.SearchModule)},
    {path:"news" , loadChildren: () => import('./ui/news/news.module').then(module => module.NewsModule)},
    {path:"map" , loadChildren: () => import('./ui/map/map.module').then(module => module.MapModule)},
    {path:"login" , loadChildren: () => import('./ui/auth/login/login.module').then(module => module.LoginModule)},
    {path:"register" , loadChildren: () => import('./ui/auth/register/register.module').then(module => module.RegisterModule)},
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
