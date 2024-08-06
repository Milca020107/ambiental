import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextosinPage } from './textosin.page';

const routes: Routes = [
  {
    path: '',
    component: TextosinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextosinPageRoutingModule {}
