import { Component, OnInit } from '@angular/core';
import { Catalogo } from 'src/app/catalogo';
import {EntidadCiudadService} from '../../servicios/entidad-ciudad.service';
import { map } from 'rxjs/operators';





@Component({
  selector: 'app-entidad-ciudad',
  templateUrl: './entidad-ciudad.component.html',
  styleUrls: ['./entidad-ciudad.component.css']
})
export class EntidadCiudadComponent implements OnInit {

  catalogo=new Array<Catalogo>();

  constructor(private entidadCiudadService:EntidadCiudadService) { }

  ngOnInit(): void {
    this.entidadCiudadService.getMunicipios().subscribe(
        resp=>{
          this.catalogo=resp.map(item=>
            {
              return new Catalogo(
              item.codigo,
              item.valor,
              item.datosAdicionales,
              item.imagen
              );
            });
        console.log(this.catalogo);
        
        });
    
  }

}
