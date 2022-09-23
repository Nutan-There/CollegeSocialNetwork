import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';



import { Placement } from '../placement';



@Injectable({
  providedIn: 'root'
})
export class PlacementService {
  handleError: (err: any, caught: Observable<HttpEvent<Placement>>) => ObservableInput<any>;
  getPlacements() {
    throw new Error('Method not implemented.');
  }



 baseUrl:string = 'http://localhost:3000/placement';//json server as backend
  constructor(private httpClient: HttpClient) {}
//baseUrl:string = 'http://localhost:8082/api/users';//url of my backend api
httpOptions = {
  headers: new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200', // -->Add this line
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': '*',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
  })
};
  getPlacementsList(): Observable<Placement[]> {
    return this.httpClient.get<Placement[]>(
      'http://localhost:8082/users'
    );
  }
  addPlacement(placement: Placement): Observable<Placement>{
    return this.httpClient.post<Placement>(
      "http://localhost:8082/v1/placementOfficer",placement
    ).pipe(catchError(this.handleError));
  }
  getPlacementByStudentId(placementId: number): Observable<Placement> {
    return this.httpClient.get<Placement>(
      'http://localhost:8082/v1/placementofficer/1' + placementId,
    );
  }
  updatePlacement(placementId: number, admin: Placement): Observable<Object> {
    return this.httpClient.put(
      'http://localhost:8082/v1/placementOfficer' + placementId,
    admin
    );
  }



 deleteUser(placementId: number): Observable<Object> {
    return this.httpClient.delete(
      'http://localhost:8082/v1/placementOfficer/1' + placementId
    );
  }

  handleError(error: HttpErrorResponse) {



   if (error.status === 0) {



    // A client-side or network error occurred. Handle it accordingly.



    console.error('An error occurred:', error.error);



  } else {



    // The backend returned an unsuccessful response code.



    // The response body may contain clues as to what went wrong.



    console.error(



      `Backend returned code ${error.status}, body was: `, error.error);



  }



  // Return an observable with a user-facing error message.



  return throwError(() => new Error('Something bad happened; please try again later.'));



}

}