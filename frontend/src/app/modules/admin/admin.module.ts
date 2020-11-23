import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SiteModule } from './site/adminSite.module';
import { AccountModule } from './account/account.module';




@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AccountModule,
    AdminRoutingModule,
    SiteModule
  ]
})
export class AdminModule { }
