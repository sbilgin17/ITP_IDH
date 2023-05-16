import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesignerinPageRoutingModule } from './designerin-routing.module';

import { DesignerinPage } from './designerin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesignerinPageRoutingModule
  ],
  declarations: [DesignerinPage]
})
export class DesignerinPageModule {}
