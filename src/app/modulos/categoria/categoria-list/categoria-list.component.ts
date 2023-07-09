import { CategoriaService } from './../shared/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../shared/categoria';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css'],
  preserveWhitespaces: true
})
export class CategoriaListComponent implements OnInit {

  id: number = 0;
  descricao: string = "";
  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listarTodasCategorias();
  }

  public listarTodasCategorias(){
    this.categoriaService.listarTodasCategorias().subscribe(
      res => this.categorias = res
    );
  }

  public editar(id: number){
    this.router.navigate(["editar", id], {relativeTo: this.route });
  }

  public pegarCategoria(id:number, descricao: string){
    this.id = id;
    this.descricao = descricao;
  }

  public inativarCategoria(){
    this.categoriaService.inativarCategoria(this.id).subscribe((res: any)=>{
          this.listarTodasCategorias();
    });
  }
}
