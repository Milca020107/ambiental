import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiPage } from './fi.page';

const routes: Routes = [
  {
    path: '',
    component: FiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiPageRoutingModule {}
