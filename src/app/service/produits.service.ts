import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Burger } from 'src/models/Produits.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor(private http: HttpClient) { }

  findMenuTaille(id:number):Observable<any>{
    return this.http.get<any>("http://127.0.0.1:8000/api/menus/"+id+"/tailles");
   }
   findAllBoissonTailles(id:number):Observable<any>{
    return this.http.get<any>("http://127.0.0.1:8000/api/boisson_tailles");
   }
   findAllBoissons(id:number):Observable<any>{
    return this.http.get<any>("http://127.0.0.1:8000/api/boissons");
   }
   collectionOfBoissons(id:number):Observable<any>{
    return this.http.get<any>("http://127.0.0.1:8000/api/boissons/"+25+"/boisson_tailles")
   }
}
