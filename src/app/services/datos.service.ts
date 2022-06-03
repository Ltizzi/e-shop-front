import { Usuario } from './../models/usuario';
import { UsuarioService } from './usuario.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  
  private datos = new BehaviorSubject(0);
  dataPosta = this.datos.asObservable();



  constructor() { }

  cambiarDato(datos: number){
    this.datos.next(datos);
  }


}
