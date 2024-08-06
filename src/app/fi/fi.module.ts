import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiPageRoutingModule } from './fi-routing.module';

import { FiPage } from './fi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiPageRoutingModule
  ],
  declarations: [FiPage]
})
export class FiPageModule {}
