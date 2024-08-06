import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiposTextoPage } from './tipos-texto.page';

const routes: Routes = [
  {
    path: '',
    component: TiposTextoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiposTextoPageRoutingModule {}
