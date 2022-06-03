import { AuthService } from './auth.service';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppError  } from '../commons/app-error';
import { BadRequestError } from '../commons/bad-request-error';
import { NotFoundError } from '../commons/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject(String) private url:string, 
                              private http: HttpClient,
                              private authServ: AuthService) { }
  
  token = this.authServ.token;
  header = new HttpHeaders({
    'Authorizaation': 'Bearer ' + this.token,
    'Content-type': "application/json"
  });

  getAll() {
    return this.http.get(this.url + '/ver')
            .pipe(map(response => response),
                catchError(this.handleError));
  }

  getAllwithAuth() {
    return this.http.get(this.url + '/ver', {headers: this.header})
  }

  get(id: number) {
    return this.http.get(this.url + '/buscar?id=' + id)
        .pipe(map(response => response),
            catchError(this.handleError));
  }

  getByUsuario(usuario:string) {
    return this.http.get(this.url + '/buscarBy?usuario=' + usuario)
        .pipe(map(response => response),
            catchError(this.handleError));
  }

  addRolToUser(usuario:string) {
    return this.http.post(this.url + '/addtouser?usuario=' + usuario, usuario)
        .pipe(map(response => response),
            catchError(this.handleError));
  }

  create(resource:any) {
    return this.http.post(this.url + '/new', resource, {headers: this.header})
                  .pipe(map(response => response),
                      catchError(this.handleError));
  }

  update(resource:any, id: number) {
    return this.http.patch(this.url + '/edit?id=' + id, resource, {headers: this.header})
              .pipe(map(response => response),
                catchError(this.handleError));
  }

  delete(id:number) {
    return this.http.delete(this.url + '/delete?id=' + id, {headers: this.header})
                .pipe(map(response => response), 
                    catchError(this.handleError));
  }


  private handleError (error: Response) {
    if (error.status === 404) {
      return throwError(() => new NotFoundError())
    }
    else if (error.status === 400) {
      return throwError(() => new BadRequestError(error))
    }
    else
      return throwError(() => new AppError(error));

  }
  

}

