import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Zone } from 'src/models/Produits.model';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  constructor(private http:HttpClient) { }

  getZones():Observable<Zone[]>{
    return this.http.get<Zone[]>("http://127.0.0.1:8000/api/zones");
  }
  oneZone(id:number):Observable<Zone>{
    return this.http.get<Zone>("http://127.0.0.1:8000/api/zones/"+id)
  }
}
