import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EthicsPageRoutingModule } from './ethics-routing.module';

import { EthicsPage } from './ethics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EthicsPageRoutingModule
  ],
  declarations: [EthicsPage]
})
export class EthicsPageModule {}
