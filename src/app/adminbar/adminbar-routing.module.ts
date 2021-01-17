import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminbarPage } from './adminbar.page';

const routes: Routes = [
  {
    path: '',
    component: AdminbarPage,
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
        path: 'Engelle',
        children: [
          {
            path: '',
            loadChildren: () => import('../engelle/engelle.module').then(m => m.EngellePageModule)
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
export class AdminbarPageRoutingModule {}
