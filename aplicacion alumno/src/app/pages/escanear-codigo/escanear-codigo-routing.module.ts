import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscanearCodigoPage } from './escanear-codigo.page';

const routes: Routes = [
  {
    path: '',
    component: EscanearCodigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscanearCodigoPageRoutingModule {}
