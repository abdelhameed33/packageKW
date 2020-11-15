import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackagekwComponent } from './packagekw.component';
import { AccountModule } from './account/account.module';
import { SiteModule } from './site/site.module';



@NgModule({
  declarations: [PackagekwComponent],
  imports: [
    CommonModule,
    AccountModule,
    SiteModule
  ]
})
export class PackgeKWModule { }
