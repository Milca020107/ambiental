import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OhPageRoutingModule } from './oh-routing.module';

import { OhPage } from './oh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OhPageRoutingModule
  ],
  declarations: [OhPage]
})
export class OhPageModule {}
