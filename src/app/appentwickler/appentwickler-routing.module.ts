import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppentwicklerPage } from './appentwickler.page';

const routes: Routes = [
  {
    path: '',
    component: AppentwicklerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppentwicklerPageRoutingModule {}
