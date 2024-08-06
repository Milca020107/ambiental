import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EePageRoutingModule } from './ee-routing.module';

import { EePage } from './ee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EePageRoutingModule
  ],
  declarations: [EePage]
})
export class EePageModule {}
