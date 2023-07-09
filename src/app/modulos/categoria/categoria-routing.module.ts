import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';

const routes: Routes = [
  { path: '', component: CategoriaListComponent  },
  { path: 'editar/:id', component: CategoriaFormComponent },
  { path: 'new', component: CategoriaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
