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
  sugeridos: Pais[] = [];
  mostrarSugerencias: boolean = false;
  buscar(termino:string ){
    console.log('buscar...');
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
    this.error = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(termino)
      .subscribe(paises => {
        this.sugeridos = paises.splice(0,10);
      },err=> this.sugeridos = []);
  }
}
