import { GlobalService } from './../../shared/global.service';
import { ProdutoService } from './../shared/produto.service';
import { CategoriaService } from './../../categoria/shared/categoria.service';
import { Categoria } from './../../categoria/shared/categoria';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  produtoForm: FormGroup;
  categorias: Categoria[] = [];

  constructor(private fb: FormBuilder,
              private categoriaService: CategoriaService,
              private produtoService: ProdutoService,
              private globalService: GlobalService) {

    this.produtoForm = this.fb.group({
      id: [''],
      descricao: [''],
      codigoProduto: [''],
      observacao: [''],
      fabricante: [''],
      status: [''],
      categoriaId: ['']
    });
   }

  ngOnInit(): void {
    this.selectCategoria();
  }

  public onSubmit(){
    let form = this.produtoForm;
    if(form.valid){
      this.produtoService.salvar(form.value).subscribe(
        success=> { this.globalService.saveShow("Salvo com Sucesso!", "Produto"),
        (error: any)=>{this.globalService.warningShow("Algo Errado!!","OPS!")}
        });
    }
    form.reset();
  }

  public selectCategoria(){
    this.categoriaService.mostrarCategoriaAtiva().subscribe(
      res => this.categorias = res
    );
  }

}
