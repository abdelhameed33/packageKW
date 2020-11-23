import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountRoutes } from './account/accout.route';
import { SiteRoutes } from './site/site.route';

const routes: Routes = [
  ...AccountRoutes,
  // ...SiteRoutes
  {
    path: '',
    loadChildren: './site/site.module#SiteModule',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackageRoutingModule { }
