import { Routes } from '@angular/router';
import { ProductComponent } from './product-page/product.component';
import { ProfileComponent } from './profile/profile.component';
import { SiteComponent } from './site.component';



export const SiteRoutes: Routes = [
    {
        path: '',
        component: SiteComponent,
        children: [
            {
                path: 'product/:id',
                component: ProductComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
        ]
    },
    // {
    //     path: 'product/:id',
    //     component: ProductComponent
    // },

];
