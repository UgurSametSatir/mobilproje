import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminbarPageRoutingModule } from './adminbar-routing.module';

import { AdminbarPage } from './adminbar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminbarPageRoutingModule
  ],
  declarations: [AdminbarPage]
})
export class AdminbarPageModule {}
