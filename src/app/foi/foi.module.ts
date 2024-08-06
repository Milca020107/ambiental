import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoiPageRoutingModule } from './foi-routing.module';

import { FoiPage } from './foi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoiPageRoutingModule
  ],
  declarations: [FoiPage]
})
export class FoiPageModule {}
