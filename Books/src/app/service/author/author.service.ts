import { Injectable } from '@angular/core';
import { Author } from '../../model/author';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  REST_API_2: string = 'http://localhost:8000/api_author';
  
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
 
  constructor(private httpClient: HttpClient) { }
 
  AddAuthor(data: Author): Observable<any> {
    let API_URL = `${this.REST_API_2}/add-author`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
 
  GetAuthors() {
    return this.httpClient.get(`${this.REST_API_2}`);
  }
 
  GetAuthor(id:any): Observable<any> {
    let API_URL = `${this.REST_API_2}/read-author/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }
 
  updateAuthor(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API_2}/update-author/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }
 
  deleteAuthor(id:any): Observable<any> {
    let API_URL = `${this.REST_API_2}/delete-author/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(
        catchError(this.handleError)
      )
  }
 
 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
