import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends DataService{

  constructor(http: HttpClient, authServ: AuthService) {
    super("http://localhost:8080/tipo", http, authServ);
   }
}
