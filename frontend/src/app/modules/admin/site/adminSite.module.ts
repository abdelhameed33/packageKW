import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteComponent } from './site.component';
import { SiteRoutingModule } from './site-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { ProductComponent } from './product/product.component';
import { DataTablesModule } from 'angular-datatables';
import { CategoryProductComponent } from './category-product/category-product.component';
import { FormsModule } from '@angular/forms';
import { ProductViewComponent } from './product-view/product-view.component';




@NgModule({
  declarations: [
    SiteComponent,
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ProductComponent,
    CategoryProductComponent,
    ProductViewComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    DataTablesModule,
    FormsModule
    //  RouterModule.forChild(SiteRoutes)
  ]
})
export class SiteModule { }
