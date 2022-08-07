import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Burger, Menu, Taille } from 'src/models/Produits.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor(private http: HttpClient) { }

  findMenuTaille(id:number):Observable<any>{
    return this.http.get<any>("http://127.0.0.1:8000/api/menus/"+id+"/taille_menuses");
   }
  
   findAllBoissons(id:number):Observable<any>{
    return this.http.get<any>("http://127.0.0.1:8000/api/boissons");
   }
  
   getB(id:number):Observable<any>{
    return this.http.get<any>("http://127.0.0.1:8000/api/tailles/"+id+"/boisson_tailles")
   }
   findTaille(id:number):Observable<Taille>{
    return this.http.get<Taille>("http://127.0.0.1:8000/api/tailles/"+id)
   }

  //  tab!:[];
  //  similarProducts(id:number){
  //   this.tab=this.http.get<any>("http://127.0.0.1:8000/api/boissons")
  //  }

}
