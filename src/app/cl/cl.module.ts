import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClPageRoutingModule } from './cl-routing.module';

import { ClPage } from './cl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClPageRoutingModule
  ],
  declarations: [ClPage]
})
export class ClPageModule {}
