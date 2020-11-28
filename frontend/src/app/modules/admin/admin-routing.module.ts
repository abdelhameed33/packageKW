import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountRoutes } from './account/accout.route';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  ...AccountRoutes,
  // ...SiteRoutes
  {
    path: '',
    loadChildren: () => import('./site/adminSite.module').then(m => m.SiteModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
