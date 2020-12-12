import { ModalModule } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';

import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SubscribeComponent } from './layout/subscribe/subscribe.component';
import { SliderComponent } from './home/slider/slider.component';
import { TestimonialComponent } from './home/testimonial/testimonial.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { BusinessCustomizationComponent } from './business-customization/business-customization.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductsComponent } from './products/products.component';
import { NotebookComponent } from './notebook/notebook.component';
import { CartComponent } from './cart/cart.component';
import { SuccessComponent } from './cart/success/success.component';
import { StickerComponent } from './sticker/sticker.component';
import {
  SwiperModule,
  SwiperConfigInterface,
  SWIPER_CONFIG,
} from 'ngx-swiper-wrapper';
import { ProfileComponent } from './profile/profile.component';
import { OrderComponent } from './profile/order/order.component';
import { SavedAddressComponent } from './profile/saved-address/saved-address.component';
import { FavoritesComponent } from './profile/favorites/favorites.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ResetPasswordComponent } from './profile/reset-password/reset-password.component';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { CommonModule } from '@angular/common';
import { TabsgroupComponent } from './tabsgroup/tabsgroup.component';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PackageRoutingModule } from './package-routing.module';
import { PackagekwComponent } from './packagekw.component';

// SwiperOptions from 'swiper' could also be used here instead of SwiperConfigInterface
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true,
};

@NgModule({
  declarations: [
    PackagekwComponent,
    NavbarComponent,
    FooterComponent,
    SubscribeComponent,
    SliderComponent,
    TestimonialComponent,
    HomeComponent,
    AboutComponent,
    BusinessCardComponent,
    BusinessCustomizationComponent,
    CheckoutComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    NotebookComponent,
    CartComponent,
    SuccessComponent,
    StickerComponent,
    ProfileComponent,
    OrderComponent,
    SavedAddressComponent,
    FavoritesComponent,
    EditProfileComponent,
    ResetPasswordComponent,
    ProductSliderComponent,
    TabsgroupComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    PackageRoutingModule,
    SwiperModule,
    NgxSliderModule,
    ModalModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
  bootstrap: [PackagekwComponent],
})
export class PackgeKWModule { }

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

