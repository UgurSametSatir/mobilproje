import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnaSayfaPage } from './ana-sayfa.page';

const routes: Routes = [
  {
    path: '',
    component: AnaSayfaPage,
    children: [
      {
        path: 'Eklediklerim',
        children: [
          {
            path: '',
            loadChildren: () => import('../eklediklerim/eklediklerim.module').then(m => m.EklediklerimPageModule)
          }
        ]

      },
      {
        path: 'Ekle',
        children: [
          {
            path: '',
            loadChildren: () => import('../ekleme/ekleme.module').then(m => m.EklemePageModule)
          }
        ]

      },
      {
        path: 'Ana-Sayfa',
        children: [
          {
            path: '',
            loadChildren: () => import('../urunler/urunler.module').then(m => m.UrunlerPageModule)
          }
        ]

      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnaSayfaPageRoutingModule {}
