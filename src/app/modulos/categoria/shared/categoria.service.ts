import { Categoria } from './categoria';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private readonly api = `${environment.api}/deltasf/api/categoria`;

  constructor(private http: HttpClient) { }

  public mostrarUmaCategoria(id: number){
    return this.http.get(`${this.api}/${id}`).pipe(
      take(1)
    )
  }

  public mostrarCategoriaAtiva(){
    return this.http.get<Categoria[]>(`${this.api}/mostrarTodosAtivo`).pipe(
      take(1)
    );
  }

  public listarTodasCategorias(){
    return this.http.get<Categoria[]>(`${this.api}/listarTodos`).pipe(
      take(1)
    );
  }

  private salvarCategoria(categoria: Categoria){
    return this.http.post(`${this.api}`, categoria).pipe(
      take(1)
    );
  }

  private alterarCategoria(categoria: Categoria){
    return this.http.put(`${this.api}`, categoria).pipe(
      take(1)
    );
  }

  public save(categoria: Categoria){
    if(categoria.id){
      return this.alterarCategoria(categoria);
    } else {
      return this.salvarCategoria(categoria);
    }
  }

  public inativarCategoria(id: number){
    return this.http.patch(`${this.api}/${id}/inativo`, "Inativo").pipe(
      take(1)
    )
  }
}
