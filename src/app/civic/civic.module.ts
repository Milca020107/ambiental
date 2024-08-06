import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CivicPageRoutingModule } from './civic-routing.module';

import { CivicPage } from './civic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CivicPageRoutingModule
  ],
  declarations: [CivicPage]
})
export class CivicPageModule {}
