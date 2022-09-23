import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Placement } from '../placement';

@Injectable({
  providedIn: 'root'
})
export class PlacementNewService {

  constructor( private http: HttpClient) { }



  addPlacement_new(placement:any){
    var totalurl= "http://localhost:8082/v1/placementOfficer";
    return this.http.post(totalurl,placement);
  }

  getPlacementsList() {
    var totalurl="http://localhost:8082/v1/placementofficers";
    return this.http.get<Placement[]>(totalurl);
  }

  getPlacementByStudentId(id: number) {
    var totalurl="http://localhost:8082/v1/placementofficer/1";
      return this.http.get<Placement>(`${totalurl}/${id}`);
  }

  delete(id: number) {
    var totalurl="http://localhost:8082/v1/placementOfficer";
    return this.http.delete(`${totalurl}/${id}`)
        .pipe(map(x => {
            return x;
        }));
}


update(id:any, params:any) {
  var totalurl="http://localhost:8082/v1/placementOfficer";
    return this.http.put(`${totalurl}/${id}`, params)
        .pipe(map(x => {
            return x;
        }));
}


}
