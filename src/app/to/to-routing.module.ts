import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToPage } from './to.page';

const routes: Routes = [
  {
    path: '',
    component: ToPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToPageRoutingModule {}
