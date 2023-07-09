import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';


@NgModule({
  declarations: [
    ProdutoFormComponent,
    ProdutoListComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ProdutoModule { }
