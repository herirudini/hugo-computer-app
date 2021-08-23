import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './__skeleton/auth/auth.component';
import { ProductListComponent } from './__molecule/product/product-list/product-list.component';
import { CartComponent } from './__molecule/cart/cart.component';
import { ProductDetailComponent } from './__molecule/product/product-detail/product-detail.component';
import { CheckoutComponent } from './__pages/checkout/checkout.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'products/detail',
    component: ProductDetailComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
