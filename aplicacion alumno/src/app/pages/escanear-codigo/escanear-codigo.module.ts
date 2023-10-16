import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscanearCodigoPageRoutingModule } from './escanear-codigo-routing.module';

import { EscanearCodigoPage } from './escanear-codigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscanearCodigoPageRoutingModule
  ],
  declarations: [EscanearCodigoPage]
})
export class EscanearCodigoPageModule {}
