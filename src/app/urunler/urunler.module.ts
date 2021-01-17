import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UrunlerPageRoutingModule } from './urunler-routing.module';

import { UrunlerPage } from './urunler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UrunlerPageRoutingModule
  ],
  declarations: [UrunlerPage]
})
export class UrunlerPageModule {}
