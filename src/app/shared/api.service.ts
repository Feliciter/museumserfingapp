import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders,HttpParams, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpoint =  environment.apiUrl; 
  keyapi =  environment.keyApi; 


  //  params = new HttpParams()
  // .set('key',this.keyapi);

  constructor(private http: HttpClient) { }

  // public fetchData(){  
	// 	//return this.http.get(`${this.SERVER_URL}`);  
  // }  
  

   // Get CollectionDetails
   sphrase:string='Rembrandt+van+Rijn'

  GetCollection(sphrase): Observable<any> {
 
    let API_URL = `${this.endpoint}collection?key=${this.keyapi}&involvedMaker=${sphrase}`;


    return this.http.get(API_URL)
      .pipe(
        map((res: Response) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }



 //https://www.rijksmuseum.nl/api/nl/collection?key=6bTGB81i&involvedMaker=Rembrandt+van+Rijn
  // Get Collection 
  // GetCollection() {
  //   return this.http.get(`${this.endpoint},{params}`);
  // }



  // Get CollectionDetails

  // GetCollectionDetails(id): Observable<any> {
  //   let API_URL = `${this.endpoint}/read-recipe/${id}`;
  //   return this.http.get(API_URL, { headers: this.headers })
  //     .pipe(
  //       map((res: Response) => {
  //         return res || {}
  //       }),
  //       catchError(this.errorMgmt)
  //     )
  //}



 

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
