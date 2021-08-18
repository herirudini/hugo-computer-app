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

import { TopbarComponent } from './__molecule/topbar/topbar.component';
import { SidebarComponent } from './__molecule/sidebar/sidebar.component';
import { ProductListComponent } from './__items/product/product-list/product-list.component';
import { AuthComponent } from './__items/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ProductListComponent,
    AuthComponent,
    SidebarComponent,
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
