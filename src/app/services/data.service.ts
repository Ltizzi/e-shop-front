import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(@Inject(String) private url:string, private http: HttpClient) { }
  

  getAll() {
    return this.http.get(this.url + '/ver')
            .pipe(map(response => response),
                catchError(this.handleError));
  }

  get(id: number) {
    return this.http.get(this.url + '/buscar?id=' + id)
        .pipe(map(response => response),
            catchError(this.handleError));
  }

  getByUser(id:number) {
    return this.http.get(this.url + '/findByUser?id=' + id)
        .pipe(map(response => response),
            catchError(this.handleError));
  }

  create(resource:any) {
    return this.http.post(this.url + '/new', resource)
                  .pipe(map(response => response),
                      catchError(this.handleError));
  }

  update(resource:any, id: number) {
    return this.http.patch(this.url + '/edit?id=' + id, resource)
              .pipe(map(response => response),
                catchError(this.handleError));
  }

  delete(id:number) {
    return this.http.delete(this.url + '/delete?id=' + id)
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

