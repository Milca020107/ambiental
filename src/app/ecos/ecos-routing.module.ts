import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcosPage } from './ecos.page';

const routes: Routes = [
  {
    path: '',
    component: EcosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcosPageRoutingModule {}
