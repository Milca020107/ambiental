import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToPageRoutingModule } from './to-routing.module';

import { ToPage } from './to.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToPageRoutingModule
  ],
  declarations: [ToPage]
})
export class ToPageModule {}
