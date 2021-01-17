import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrunlerPage } from './urunler.page';

const routes: Routes = [
  {
    path: '',
    component: UrunlerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UrunlerPageRoutingModule {}
