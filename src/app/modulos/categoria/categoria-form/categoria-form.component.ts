import { ActivatedRoute } from '@angular/router';
import { GlobalService } from './../../shared/global.service';
import { CategoriaService } from './../shared/categoria.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../shared/categoria';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {

  categoriaForm: FormGroup;

  constructor(private fb: FormBuilder,
              private categoriaService: CategoriaService,
              private globalService: GlobalService,
              private route: ActivatedRoute) {

        this.categoriaForm = this.fb.group({
          id: [''],
          descricao: ['', [Validators.required]],
          status: ['',[Validators.required]],
          imagem: ['']
        });
   }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.params;
    this.mostrarUmaCategoria(routeParams['id']);
  }

  public mostrarUmaCategoria(id: number){
    if(id != null){
      this.categoriaService.mostrarUmaCategoria(id).subscribe((res: any)=>{
        this.preencherFormulario(res)
      });
    }
  }

  public onSubmit(){
    let form = this.categoriaForm;
    if(form.valid){
      this.categoriaService.save(form.value).subscribe(
        success=> { this.globalService.saveShow("Salvo com Sucesso!", "Categoria"),
                  (error: any)=>{this.globalService.warningShow("Algo Errado!!","OPS!")}
      });
    }
    this.categoriaForm.reset();
  }

  public preencherFormulario(categoria: Categoria){
      this.categoriaForm.patchValue(categoria);
  }
}
