import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganizadorPageRoutingModule } from './organizador-routing.module';

import { OrganizadorPage } from './organizador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrganizadorPageRoutingModule
  ],
  declarations: [OrganizadorPage]
})
export class OrganizadorPageModule {}
