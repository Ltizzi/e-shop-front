import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class EntradaService extends DataService{

  constructor(http: HttpClient) {
    super("http://localhost:8080/ingreso", http);
   }
}
