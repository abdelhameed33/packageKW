import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SiteModule } from './site/adminSite.module';
import { AccountModule } from './account/account.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AccountModule,
    AdminRoutingModule,
    SiteModule,
    HttpClientModule,
  ]
})
export class AdminModule { }
