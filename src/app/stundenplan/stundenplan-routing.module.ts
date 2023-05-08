import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StundenplanPage } from './stundenplan.page';

const routes: Routes = [
  {
    path: '',
    component: StundenplanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StundenplanPageRoutingModule {}
