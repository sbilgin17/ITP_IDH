import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebsiteentwicklerPageRoutingModule } from './websiteentwickler-routing.module';

import { WebsiteentwicklerPage } from './websiteentwickler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebsiteentwicklerPageRoutingModule
  ],
  declarations: [WebsiteentwicklerPage]
})
export class WebsiteentwicklerPageModule {}
