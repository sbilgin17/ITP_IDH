import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StundenplanPageRoutingModule } from './stundenplan-routing.module';

import { StundenplanPage } from './stundenplan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StundenplanPageRoutingModule
  ],
  declarations: [StundenplanPage]
})
export class StundenplanPageModule {}
