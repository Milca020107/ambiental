import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TlcPageRoutingModule } from './tlc-routing.module';

import { TlcPage } from './tlc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TlcPageRoutingModule
  ],
  declarations: [TlcPage]
})
export class TlcPageModule {}
