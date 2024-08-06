import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiposTextoPageRoutingModule } from './tipos-texto-routing.module';

import { TiposTextoPage } from './tipos-texto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiposTextoPageRoutingModule
  ],
  declarations: [TiposTextoPage]
})
export class TiposTextoPageModule {}
