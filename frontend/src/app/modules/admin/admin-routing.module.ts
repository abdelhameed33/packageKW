import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountRoutes } from './account/accout.route';

const routes: Routes = [
  ...AccountRoutes,
  // ...SiteRoutes
  {
    path: 'dashboard',
    loadChildren: './site/adminSite.module#SiteModule',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
