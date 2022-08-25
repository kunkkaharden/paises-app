import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  constructor(private paisService: PaisService) {}
  termino: string = '';
  error: boolean = false;
  paises: Pais[] = [];
  buscar(termino:string ){
    this.termino = termino;
    this.error = false;
    this.paisService.buscarCapital(this.termino)
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
