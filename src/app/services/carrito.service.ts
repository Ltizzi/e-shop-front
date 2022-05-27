import { AuthService } from './auth.service';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService extends DataService{

  constructor(http: HttpClient, authServ: AuthService) {
    super("http://localhost:8080/cart", http, authServ)
  }
}
