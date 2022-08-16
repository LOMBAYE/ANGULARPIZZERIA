import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Livraison } from 'src/models/Produits.model';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  constructor(private http: HttpClient) { }

  livraisons():Observable<Livraison[]>{
    return this.http.get<Livraison[]>("http://127.0.0.1:8000/api/livraisons")
  }

  oneLivraison(id:number):Observable<Livraison>{
    return this.http.get<Livraison>("http://127.0.0.1:8000/api/livraisons/"+id)
  }
 
}
