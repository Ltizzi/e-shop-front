import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService extends DataService {

  constructor(http: HttpClient, authServ: AuthService) {
    super("https://ltizzi-e-shop.herokuapp.com/producto", http, authServ);
   }
}
