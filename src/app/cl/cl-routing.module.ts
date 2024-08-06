import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClPage } from './cl.page';

const routes: Routes = [
  {
    path: '',
    component: ClPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClPageRoutingModule {}
