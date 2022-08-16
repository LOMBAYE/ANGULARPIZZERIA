import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livreur, Zone } from 'src/models/Produits.model';

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
  changeState(id:number,toDo:string){
    this.http.put<any>("http://127.0.0.1:8000/api/commandes/"+id, { 'isEtat': toDo}).subscribe(data => {})
    location.reload();
}

livreursList():Observable<Livreur[]>{
  return this.http.get<Livreur[]>("http://127.0.0.1:8000/api/livreurs")
}

}
