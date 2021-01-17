import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EklemePage } from './ekleme.page';

const routes: Routes = [
  {
    path: '',
    component: EklemePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EklemePageRoutingModule {}
