import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngellePage } from './engelle.page';

const routes: Routes = [
  {
    path: '',
    component: EngellePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngellePageRoutingModule {}
