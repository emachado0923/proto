import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import {Catalogo} from '../catalogo';
;

import { Observable } from 'rxjs';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class EntidadCiudadService {

  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    'x-api-key': 'oGk6Bpcjf648cgmkVmF4o5JDo1ZZeaPf3rk5xgI1',
  });

  private url:string='https://stg-api-conecta.segurosbolivar.com/stage/entidad/ciudades?claveAsesor=38186';
  
  constructor(private httpClient:HttpClient) { }

  public getMunicipios():Observable<Catalogo[]>{
    return this.httpClient.get<Catalogo[]>(this.url);
  }
 
}
