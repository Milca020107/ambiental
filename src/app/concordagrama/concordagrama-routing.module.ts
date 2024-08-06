import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConcordagramaPage } from './concordagrama.page';

const routes: Routes = [
  {
    path: '',
    component: ConcordagramaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConcordagramaPageRoutingModule {}
