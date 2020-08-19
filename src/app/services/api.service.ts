import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError,tap} from 'rxjs/operators';
import {  HttpClient} from '@angular/common/http';
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



/* GET GetCollection*/
GetCollection(sphrase: string): Observable<Collection[]> {

  //TODO if (!sphrase.trim()) {
  if (!sphrase) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Collection[]>(`${this.endpoint}collection?key=${this.keyapi}&involvedMaker=${sphrase}`)
  .pipe(
    tap(x => x.length ?
       console.log(`found collection matching "${sphrase}"`) :
       console.log(`no collection matching "${sphrase}"`)),
    catchError(this.handleError<Collection[]>('Collection[]', []))
  );
}


}
