// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para usar ngForm
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule

import { AppComponent } from './app.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // Agregar FormsModule aquí
    HttpClientModule // Agregar HttpClientModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
