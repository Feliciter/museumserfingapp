import { Injectable } from '@angular/core';

import { Observable, throwError,of } from 'rxjs';
import { catchError, map,tap} from 'rxjs/operators';


import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Collection } from '../models/collection';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  endpoint = environment.apiUrl;
  keyapi = environment.keyApi;

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
     console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



/* GET heroes whose name contains search term */
GetCollection(sphrase: string): Observable<Collection[]> {

  //TODO if (!sphrase.trim()) {
  if (!sphrase) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Collection[]>(`${this.endpoint}collection?key=${this.keyapi}&involvedMaker=${sphrase}`).pipe(
    tap(x => x.length ?
       console.log(`found heroes matching "${sphrase}"`) :
       console.log(`no heroes matching "${sphrase}"`)),
    catchError(this.handleError<Collection[]>('Collection[]', []))
  );
}


  // Get CollectionDetails 

  // GetCollection(sphrase: string): Observable<Collection[]> {
  //   const API_URL = `${this.endpoint}collection?key=${this.keyapi}&involvedMaker=${sphrase}`;
   
  //   return this.http
  //     .get<Collection[]>(API_URL)
     
  //     .pipe(catchError(this.errorMgmt));
  // }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(errorMessage);
  }
}
