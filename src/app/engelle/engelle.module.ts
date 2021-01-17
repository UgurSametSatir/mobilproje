import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngellePageRoutingModule } from './engelle-routing.module';

import { EngellePage } from './engelle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngellePageRoutingModule
  ],
  declarations: [EngellePage]
})
export class EngellePageModule {}
