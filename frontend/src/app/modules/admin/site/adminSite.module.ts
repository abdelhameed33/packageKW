import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteComponent } from './site.component';
import { SiteRoutingModule } from './site-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { ProductComponent } from './product/product.component';




@NgModule({
  declarations: [SiteComponent, MainPageComponent, HeaderComponent, FooterComponent, SidebarComponent, ProductComponent],
  imports: [
    CommonModule,
    SiteRoutingModule
    //  RouterModule.forChild(SiteRoutes)
  ]
})
export class SiteModule { }
