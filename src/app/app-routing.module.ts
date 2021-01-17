import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'ana-sayfa',
    loadChildren: () => import('./ana-sayfa/ana-sayfa.module').then( m => m.AnaSayfaPageModule)
  },
  {
    path: 'adminbar',
    loadChildren: () => import('./adminbar/adminbar.module').then( m => m.AdminbarPageModule)
  }/* ,
   {
  path: 'engelle',
    loadChildren: () => import('./engelle/engelle.module').then( m => m.EngellePageModule)
  },
  {
    path: 'ekleme',
    loadChildren: () => import('./ekleme/ekleme.module').then( m => m.EklemePageModule)
  },
  {
    path: 'eklediklerim',
    loadChildren: () => import('./eklediklerim/eklediklerim.module').then( m => m.EklediklerimPageModule)
  },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
