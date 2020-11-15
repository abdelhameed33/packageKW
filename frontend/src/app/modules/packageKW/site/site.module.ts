import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteComponent } from './site.component';
import { ProductComponent } from './product-page/product.component';
import { RouterModule } from '@angular/router';
import { SiteRoutes } from './site.route';



@NgModule({
  declarations: [SiteComponent, ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SiteRoutes)
  ]
})
export class SiteModule { }
