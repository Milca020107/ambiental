import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConcordagramaPageRoutingModule } from './concordagrama-routing.module';

import { ConcordagramaPage } from './concordagrama.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConcordagramaPageRoutingModule
  ],
  declarations: [ConcordagramaPage]
})
export class ConcordagramaPageModule {}
