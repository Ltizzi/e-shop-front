import { DataService } from './data.service';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../commons/app-error';
import { BadRequestError } from '../commons/bad-request-error';
import { NotFoundError } from '../commons/not-found-error';


@Injectable({
  providedIn: 'root'
})
export class ShopOrderService extends DataService{

// url:string = "http://localhost:8080/order";

constructor(http: HttpClient, authServ: AuthService) {
  super("https://ltizzi-e-shop.herokuapp.com/order", http, authServ);
 }


  // constructor(private http: HttpClient, private authServ: AuthService) { }

  // token = this.authServ.token;
  // header = new HttpHeaders({
  //   'Authorizaation': 'Bearer ' + this.token,
  //   'Content-type': "application/json"
  // });

  // getAll(){
  //   return this.http.get(this.url + '/ver')
  //                 .pipe(map(response => response),
  //                     catchError(this.handleError));
  // }

  // get(id:number){
  //   return this.http.get(this.url + '/buscar?id=' + id)
  //                 .pipe(map(response => response),
  //                     catchError(this.handleError));
  // }

  // create(order:any) {
  //   return this.http.post(this.url + '/new', order, {headers: this.header})
  //                 .pipe(map(response => response),
  //                     catchError(this.handleError));
  // }

  // delete(id:number) {
  //   return this.http.delete(this.url + '/delete?id=' + id, {headers: this.header})
  //                 .pipe(map(response => response),
  //                     catchError(this.handleError));
  // }

  // update(resource: any, id:number) {
  //   return this.http.patch(this.url + '/edit?id=' + id, resource, {headers: this.header})
  //                 .pipe(map(response => response),
  //                     catchError(this.handleError));
  // }


  // private handleError (error: Response) {
  //   if (error.status === 404) {
  //     return throwError(() => new NotFoundError())
  //   }
  //   else if (error.status === 400) {
  //     return throwError(() => new BadRequestError(error))
  //   }
  //   else
  //     return throwError(() => new AppError(error));

  // }
}
