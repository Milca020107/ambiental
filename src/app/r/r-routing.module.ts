import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RPage } from './r.page';

const routes: Routes = [
  {
    path: '',
    component: RPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RPageRoutingModule {}
