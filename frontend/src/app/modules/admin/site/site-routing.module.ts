import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryProductComponent } from './category-product/category-product.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductComponent } from './product/product.component';
import { SiteComponent } from './site.component';

const routes: Routes = [
  {
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
        path: 'products/:id',
        component: CategoryProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
