import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountModule } from './account/account.module';
import { SiteModule } from './site/site.module';
import { RouterModule } from '@angular/router';
import { PackagekwComponent } from './packagekw.component';
import { PackageRoutingModule } from './package-routing.module';




@NgModule({
  declarations: [PackagekwComponent],
  imports: [
    CommonModule,
    AccountModule,
    SiteModule,
   PackageRoutingModule
  ]
})
export class PackgeKWModule { }
