import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApPageRoutingModule } from './ap-routing.module';

import { ApPage } from './ap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApPageRoutingModule
  ],
  declarations: [ApPage]
})
export class ApPageModule {}
