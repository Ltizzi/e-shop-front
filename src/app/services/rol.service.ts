import { DataService } from './data.service';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolService extends DataService {

  constructor(http: HttpClient, authServ: AuthService) {
    super("https://ltizzi-e-shop.herokuapp.com/rol", http, authServ)
   }
}
