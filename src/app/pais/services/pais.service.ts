import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  private httpsParams: string = '?fields=name,capital,population,cca3,flags';
  constructor(private http: HttpClient) { }
  buscarPais(termino: string): Observable<Pais[]> {
    const url = this.apiUrl + '/name/' +termino;
      return this.http.get<Pais[]>(url);
  }
  buscarCapital(termino: string): Observable<Pais[]> {
    const url = this.apiUrl + '/capital/' +termino;
      return this.http.get<Pais[]>(url);
  }
  buscarid(termino: string): Observable<Pais[]> {
    const url = this.apiUrl + '/alpha/' +termino;
      return this.http.get<Pais[]>(url);
  }

  buscarRegion(termino: string): Observable<Pais[]> {
    const url = this.apiUrl + '/region/' +termino+ this.httpsParams;
      return this.http.get<Pais[]>(url);
  }
}
