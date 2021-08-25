import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';

import { TopbarComponent } from './__skeleton/topbar/topbar.component';
import { SidebarComponent } from './__skeleton/sidebar/sidebar.component';
import { ProductListComponent } from './__molecule/product/product-list/product-list.component';
import { AuthComponent } from './__skeleton/auth/auth.component';
import { CartComponent } from './__molecule/cart/cart.component';
import { ProductDetailComponent } from './__molecule/product/product-detail/product-detail.component';
import { CheckoutComponent } from './__pages/checkout/checkout.component';
import { HomeComponent } from './__pages/home/home.component';
import { ProductListItemComponent } from './__skeleton/product-list-item/product-list-item.component';
import { CartItemComponent } from './__skeleton/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ProductListComponent,
    AuthComponent,
    SidebarComponent,
    CartComponent,
    ProductDetailComponent,
    CheckoutComponent,
    HomeComponent,
    ProductListItemComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
