import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/models/Produits.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  value: string;
  constructor(private http:HttpClient) {
    this.value="";
   }
   setValue(data: string) {
    this.value= data;
   }
   getValue() {
    return this.value;
   }

allProducts():Observable<Produit[]>{
  return this.http.get<Produit[]>("http://127.0.0.1:8000/api/produits")
}
oneProduct(id:number):Observable<Produit>{
  return this.http.get<Produit>("http://127.0.0.1:8000/api/produits/"+id)
}

}
