import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcosPageRoutingModule } from './ecos-routing.module';

import { EcosPage } from './ecos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcosPageRoutingModule
  ],
  declarations: [EcosPage]
})
export class EcosPageModule {}
