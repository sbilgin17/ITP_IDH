import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'student-detail',
    loadChildren: () => import('./student-detail/student-detail.module').then( m => m.StudentDetailPageModule)
  },
  {
    path: 'stundenplan',
    loadChildren: () => import('./stundenplan/stundenplan.module').then( m => m.StundenplanPageModule)
  },
  {
    path: 'stundenplan',
    loadChildren: () => import('./stundenplan/stundenplan.module').then( m => m.StundenplanPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'appentwickler',
    loadChildren: () => import('./appentwickler/appentwickler.module').then( m => m.AppentwicklerPageModule)
  },
  {
    path: 'designerin',
    loadChildren: () => import('./designerin/designerin.module').then( m => m.DesignerinPageModule)
  },
  {
    path: 'websiteentwickler',
    loadChildren: () => import('./websiteentwickler/websiteentwickler.module').then( m => m.WebsiteentwicklerPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
