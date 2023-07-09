import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: ()=> import('./modulos/home/home.module').then(h => h.HomeModule) },
  { path: 'categoria', loadChildren: ()=> import('./modulos/categoria/categoria.module').then(c => c.CategoriaModule) },
  { path: 'produto', loadChildren: ()=> import('./modulos/produto/produto.module').then(p => p.ProdutoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
