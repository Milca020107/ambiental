import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TlcPage } from './tlc.page';

const routes: Routes = [
  {
    path: '',
    component: TlcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TlcPageRoutingModule {}
