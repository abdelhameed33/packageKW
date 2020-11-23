import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductComponent } from './product-page/product.component';
import { ProfileComponent } from './profile/profile.component';
import { SiteComponent } from './site.component';

const routes: Routes = [{
  path: '',
  component: SiteComponent,
  children: [
    {
      path: '',
      component: MainPageComponent
    },
    {
      path: 'product/:id',
      component: ProductComponent
    },
    {
      path: 'profile',
      component: ProfileComponent
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
