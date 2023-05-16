import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesignerinPage } from './designerin.page';

const routes: Routes = [
  {
    path: '',
    component: DesignerinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignerinPageRoutingModule {}
