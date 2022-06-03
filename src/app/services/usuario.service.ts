import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends DataService{

  constructor(http: HttpClient, authServ: AuthService) {
    super("https://ltizzi-e-shop.herokuapp.com/user", http, authServ);
   }
  
  
  //  isLogAndGet() {
  //    if(this.authServ.isLoggedIn()){
  //     this.getByUsuario((this.authServ.currentUser).sub).subscribe(data => {return data})
  //    }
  //  }
   
 
}
