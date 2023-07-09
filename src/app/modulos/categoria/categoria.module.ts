import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';


@NgModule({
  declarations: [
    CategoriaFormComponent,
    CategoriaListComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class CategoriaModule { }
