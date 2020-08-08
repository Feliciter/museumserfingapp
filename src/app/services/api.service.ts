import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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

  // Get CollectionDetails
  sphrase: string = 'Rembrandt van Rijn';

  GetCollection(sphrase: string): Observable<Collection[]> {
    let API_URL = `${this.endpoint}collection?key=${this.keyapi}&involvedMaker=${sphrase}`;
   
    return this.http
      .get<Collection[]>(API_URL)
      .pipe(catchError(this.errorMgmt));
  }

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
