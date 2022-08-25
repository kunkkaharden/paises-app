import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones: string[] = ['africa','america','asia','europe','oceania'];
  regionActiva = '';
  paises: Pais[] = [];

  constructor(private paisService: PaisService) {}

  buscar(region: string) {
    this.regionActiva = region;
    this.paisService.buscarRegion(this.regionActiva)
    .subscribe( (paises) =>{
      this.paises = paises;
    });
  }
  getClaseCSS(region: string){
    return (region === this.regionActiva) ? 'btn btn-primary mr-1': 'btn btn-outline-primary mr-1';
  }

}
