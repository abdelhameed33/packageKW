import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './modules/admin/admin.component';
import { PackgeKWModule } from './modules/packageKW/packge-kw.module';
import { AdminModule } from './modules/admin/admin.module';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './common/interceptor/error.interceptor';
import { ErrorInterceptor } from './common/interceptor/jwt.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SERVER } from './common/constants/app.constants';
import { ToastrModule } from 'ngx-toastr';


const config: SocketIoConfig = { url: SERVER, options: {} };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PackgeKWModule,
    AdminModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    SocketIoModule.forRoot(config)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
