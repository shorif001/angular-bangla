import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { TemplateFormComponent } from './pages/template-form/template-form.component';


@NgModule({
  declarations: [
    CreatePageComponent,
    ProductPageComponent,
    TemplateFormComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
