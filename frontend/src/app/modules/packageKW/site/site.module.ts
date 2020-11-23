import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteComponent } from './site.component';
import { ProductComponent } from './product-page/product.component';
import { HeaderComponent } from './layouts/header.component';
import { FooterComponent } from './layouts/footer.component';
import { SiteRoutingModule } from './site-routing.module';
import { MainPageComponent } from './main-page/main-page.component';



@NgModule({
  declarations: [SiteComponent, ProductComponent, HeaderComponent, FooterComponent, MainPageComponent],
  imports: [
    CommonModule,
   SiteRoutingModule,
  //  RouterModule.forChild(SiteRoutes)
  ]
})
export class SiteModule { }
