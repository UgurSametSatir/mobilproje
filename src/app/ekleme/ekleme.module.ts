import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EklemePageRoutingModule } from './ekleme-routing.module';

import { EklemePage } from './ekleme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EklemePageRoutingModule
  ],
  declarations: [EklemePage]
})
export class EklemePageModule {}
