import { Injectable, OnInit } from '@angular/core';
import { Burger, Catalogue, Menu } from 'src/models/Produits.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService implements OnInit{
  

  constructor(private http: HttpClient ,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    // console.log(this.getAllProducts()); 
  }

  // findProduitById(num:number):Menu|Burger{
  //   // equivalent a parcourir le tableau pour retrouver l element en question
  //   const produitTrouve=(this.catalogue.burgers.concat(this.catalogue.menus)).filter(
  //     (produit:Menu|Burger)=>{
  //       return produit.id===num;
  //     }
  //   )
  //   return produitTrouve[0]; 
  // }

 cata_url="http://127.0.0.1:8000/api/catalogues"
 menu_url="http://127.0.0.1:8000/api/menus/"
 burger_url="http://127.0.0.1:8000/api/burgers/"
 produit_url="http://127.0.0.1:8000/api/produits/"
 
 getCatalogue():Observable<any>{
  return this.http.get<any>(this.cata_url);
 }

 findProduit(id:number):Observable<Burger|Menu>{
  return this.http.get<Burger|Menu>(this.produit_url+id);
 }

 transform(params: string){
  return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, '+params);
}

  // url=environment.baseUrl+'catalogues'; 
  // url=environment.baseUrl; 

 
}
