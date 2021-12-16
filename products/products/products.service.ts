import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Products } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = "http://localhost:8080/v1/products";

  constructor(private http : HttpClient) { }

  public findAll() : Observable<any>{
    return this.http.get(this.url)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  public(product : any){
    return this.http.post(this.url, product)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
