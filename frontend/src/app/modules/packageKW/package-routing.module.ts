import { BusinessCustomizationComponent } from './business-customization/business-customization.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ResetPasswordComponent } from './profile/reset-password/reset-password.component';
import { FavoritesComponent } from './profile/favorites/favorites.component';
import { SavedAddressComponent } from './profile/saved-address/saved-address.component';
import { OrderComponent } from './profile/order/order.component';
import { ProfileComponent } from './profile/profile.component';
import { StickerComponent } from './sticker/sticker.component';
import { SuccessComponent } from './cart/success/success.component';
import { CartComponent } from './cart/cart.component';
import { NotebookComponent } from './notebook/notebook.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackagekwComponent } from './packagekw.component';

const routes: Routes = [
  {
    path: '',
    component: PackagekwComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'business-card',
        component: BusinessCardComponent,
      },
      {
        path: 'business-custom',
        component: BusinessCustomizationComponent,
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'notebook',
        component: NotebookComponent,
      },
      {
        path: 'carts',
        component: CartComponent,
      },
      {
        path: 'carts/success',
        component: SuccessComponent,
      },
      {
        path: 'sticker',
        component: StickerComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
        children: [
          { path: '', component: OrderComponent },
          { path: 'order', component: OrderComponent },
          { path: 'save-address', component: SavedAddressComponent },
          { path: 'favorites', component: FavoritesComponent },
          { path: 'reset-password', component: ResetPasswordComponent },
          { path: 'edit-profile', component: EditProfileComponent },
        ],
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackageRoutingModule { }
