import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService } from './../shared/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../shared/produto';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css'],
  preserveWhitespaces: true
})
export class ProdutoListComponent implements OnInit {

  id: number = 0;
  descricao: string = '';
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listarTodosProdutos();
  }

  public listarTodosProdutos(){
    this.produtoService.listarTodosProdutos().subscribe(
      res => this.produtos = res
    );
  }

  public editar(id: number){
    this.router.navigate(["editar", id], { relativeTo: this.route });
  }

  public pegarProduto(id: number ,descricao: string){
      this.id = id;
      this.descricao = descricao;
  }

  public inativarProduto(){

  }
}
