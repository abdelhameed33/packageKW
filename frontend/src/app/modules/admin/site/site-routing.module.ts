import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryProductComponent } from './category-product/category-product.component';
import { MainPageComponent } from './main-page/main-page.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductComponent } from './product/product.component';
import { SiteComponent } from './site.component';
import { UsersComponent } from './users/users.component';

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
        path: 'products/:id',
        component: ProductViewComponent
      },
      {
        path: 'products/:id/category',
        component: CategoryProductComponent
      },
      {
        path: 'products-create',
        component: ProductComponent
      },
      {
        path: 'products/:id/edit',
        component: ProductComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'orders/:id',
        component: OrderViewComponent,
      },
      {
        path: 'orders/:id',
        component: OrderViewComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      }
    ],
  },
  // { path: '404', component: NotFoundComponent },
  // { path: '**', redirectTo: '/admin' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
