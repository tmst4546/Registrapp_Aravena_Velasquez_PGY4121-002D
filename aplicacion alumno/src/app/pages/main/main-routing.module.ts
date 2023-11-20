import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'scanner-qr',
        loadChildren: () => import('./scanner-qr/scanner-qr.module').then(m => m.ScannerQrPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: 'feriados',
        loadChildren: () => import('./feriados/feriados.module').then( m => m.FeriadosPageModule)
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }
