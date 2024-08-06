import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CivicPage } from './civic.page';

const routes: Routes = [
  {
    path: '',
    component: CivicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CivicPageRoutingModule {}
