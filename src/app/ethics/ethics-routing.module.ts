import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EthicsPage } from './ethics.page';

const routes: Routes = [
  {
    path: '',
    component: EthicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EthicsPageRoutingModule {}
