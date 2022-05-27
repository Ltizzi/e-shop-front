import { UsuarioService } from './usuario.service';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUserSubject: BehaviorSubject<any>;

  private headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': '*/*'
  });

  constructor(private http: HttpClient, 
              public jwtHelper: JwtHelperService) {
    console.log("EL servicio de autenticación está corriendo");
    this.currentUserSubject=
        new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('token') || '{}'))
   }

  login(credentials:any): Observable<any> {
      const body = new HttpParams({fromObject: credentials});
      const options = { headers: this.headers};
      return this.http.post('http://localhost:8080/api/login', body.toString(), options)
          .pipe(map((data:any) => {
            if (data) {
              sessionStorage.setItem('token', JSON.stringify(data));
              this.currentUserSubject.next(data);
              return true;
            }
            return false;
          }));

  }

  logout() {
     sessionStorage.removeItem('token')
  }

  isLoggedIn() {
    if (sessionStorage.getItem('token')) {
      return true;
    }
    
    else {return false;}
  }

  get currentUser() {
     if (sessionStorage.getItem('token') != null)
      
      return this.jwtHelper.decodeToken(this.currentUserSubject.value);
    else return null;
  }

  get token() {
    return this.currentUserSubject.value;
  }

  isAdmin(){
    if (sessionStorage.getItem('token') != null && this.currentUser.roles[0] === "ROL_ADMIN") return true;
    else return false;
  }

  isTokenExpired() {
    return this.jwtHelper.isTokenExpired();

  }

}
