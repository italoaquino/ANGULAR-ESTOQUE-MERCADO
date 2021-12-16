import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import {MatFormFieldModule} from '@angular/material/form-field';
import { FormularioComponent } from './formulario/formulario.component';


@NgModule({
  declarations: [
    ProductsComponent,
    FormularioComponent,

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule
  ]
})
export class ProductsModule { }
