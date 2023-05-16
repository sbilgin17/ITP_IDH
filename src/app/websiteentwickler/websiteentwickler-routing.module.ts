import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebsiteentwicklerPage } from './websiteentwickler.page';

const routes: Routes = [
  {
    path: '',
    component: WebsiteentwicklerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteentwicklerPageRoutingModule {}
