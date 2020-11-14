import { Routes } from '@angular/router';
import { ProductComponent } from './product-page/product.component';



export const SiteRoutes: Routes = [
    {
        path: 'product/:id',
        component: ProductComponent
    },

];
