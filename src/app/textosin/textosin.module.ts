import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextosinPageRoutingModule } from './textosin-routing.module';

import { TextosinPage } from './textosin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextosinPageRoutingModule
  ],
  declarations: [TextosinPage]
})
export class TextosinPageModule {}
