import { Injectable, OnInit } from '@angular/core';
import { Burger, Catalogue, Menu } from 'src/models/Produits.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService implements OnInit{

  constructor(http: HttpClient) { }

  ngOnInit(): void {
    this.findCherries();
  }
  private catalogue:Catalogue = {
    menus:[{
      id: 9,
      nom:"MENU 1",
      image:'assets/images/menuCom2.jpeg',
      prix:5000,
      burgers:[
        {
        id: 1,
          nom:"CHEESE BURGER",
          prix:2000,
          image:'assets/images/burgersalad.jpeg'
        }
      ],
      frites:[],
      boissons:[]
    },
    {
      id: 7,
      nom:"MENU 2",
      image:'assets/images/menu1.jpg',
      prix:5000,
      burgers:[
        {
        id: 1,
          nom:"CHEESE BURGER",
          prix:2000,
          image:'assets/images/burgersalad.jpeg'
        },
        {
        id: 2,
          nom:"DOUBLE BURGER",
          prix:4000,
          image:'assets/images/burger1.jpeg'
        }
      ],
      frites:[],
      boissons:[]
    },   
    ],
    burgers:[
      {
        id: 1,
        nom:"CHEESE BURGER",
        prix:2000,
        image:'assets/images/burgersalad.jpeg'
      },
      {
        id: 2,
        nom:"DOUBLE BURGER",
        prix:4000,
        image:'assets/images/burger1.jpeg'
      },
      {
        id: 5,
        nom:"DOUBLE SMASH",
        prix:2000,
        image:'assets/images/ranch.jpg'
      }
      
    ]
  }
  ;
 

  getCatalogue():Catalogue{
    return this.catalogue;
  }

  findProduitById(num:number):any{
    // equivalent a parcourir le tableau pour retrouver l element en question
    const produitTrouve=(this.catalogue.burgers.concat(this.catalogue.menus)).find(
      (produit:Menu|Burger)=>{
        return produit.id===num;
      }
    )
    return produitTrouve; 
  }
   findCherries() { 
    return this.catalogue.burgers;
  }


  url=environment.baseUrl+'catalogues'; 

  // getCat(){
  //   return new Observable((observer)=>{
  //     this.http.get(this.url,{withCredentials:true}).subscribe(result=>{
         
  //       })
  //   }
  //   );
  // }
  // getFriends(){
  //   this.http.get<any>('http://localhost:8888/friends').subscribe(
  //     response => {
  //       console.log(response);
  //       this.catalogue = response;
  //     }
  //   );
  // }
  getId(){
    return new Observable((observer)=>{
      
    }
    );
  }
}
