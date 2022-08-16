import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/models/Produits.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor(private http:HttpClient) { }

allProducts():Observable<Produit[]>{
  return this.http.get<Produit[]>("http://127.0.0.1:8000/api/produits")
}
oneProduct(id:number):Observable<Produit>{
  return this.http.get<Produit>("http://127.0.0.1:8000/api/produits/"+id)
}

}
