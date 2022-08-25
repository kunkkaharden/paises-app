import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent  {

  constructor(private paisService: PaisService) {}
  termino: string = '';
  error: boolean = false;
  paises: Pais[] = [];
  buscar(termino:string ){
    this.termino = termino;
    this.error = false;
    this.paisService.buscarPais(this.termino)
    .subscribe( (paises) =>{
      this.paises = paises;
    }, (err)=>{
      this.error  = true;
      this.paises = [];
    });

  }
  sugerencias(termino: string){

  }
}
