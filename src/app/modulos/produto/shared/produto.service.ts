import { take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly api = `${environment.api}/deltasf/api/produto`;

  constructor(private http: HttpClient) { }

  public listarTodosProdutos(){
    return this.http.get<Produto[]>(`${this.api}/listarTodos`).pipe(
      take(1)
    );
  }

  private salvarProduto(produto: Produto){
    return this.http.post(`${this.api}`, produto).pipe(
      take(1)
    );
  }

  private alterarProduto(produto: Produto){
    return this.http.put(`${this.api}`, produto).pipe(
      take(1)
    );
  }

  public salvar(produto: Produto){
    if(produto.id){
      return this.alterarProduto(produto);
    } else {
      return this.salvarProduto(produto);
    }
  }
}
