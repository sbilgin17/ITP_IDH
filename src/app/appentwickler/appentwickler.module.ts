import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppentwicklerPageRoutingModule } from './appentwickler-routing.module';

import { AppentwicklerPage } from './appentwickler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppentwicklerPageRoutingModule
  ],
  declarations: [AppentwicklerPage]
})
export class AppentwicklerPageModule {}
