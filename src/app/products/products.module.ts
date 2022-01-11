import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './components/products/products.component';

import { MaterialModule } from '../material/material.module';
import { ProductsRoutingModule } from './products-routing.module';
@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports:[
    ProductsRoutingModule,
    CommonModule,
    MaterialModule
  ]
})

export class ProductsModule { }
