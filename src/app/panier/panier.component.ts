import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PanierService } from '../service/panier.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Burger, ligneDeCom, Menu } from 'src/models/Produits.model';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  command_url="http://127.0.0.1:8000/api/commandes"

  private selectedLink: string="false"; 
  choice:string='false'
  zone:string='not yet'
  private selectedZone:string=''
  constructor(private panierService: PanierService, private http:HttpClient) { }

  totalPrice: number = 0;
paniers:{}[]=[]
  items$=this.panierService.items$;
  ngOnInit(): void {
    console.log(this.commandFormat());  
    this.items$.subscribe(data=>{});
  }

items!:Burger[] | Menu[]

commandFormat(){
 this.panierService.getPanier().subscribe(data=>{this.items=data});

 this.items.forEach(
    item =>{
      this.paniers.push(
          {
            "quantite": item.qte,
            "produit":"/api/produits/"+item.id
          }
      )
    }
  )
  return this.paniers
}
   
  purchase(tab:Observable<any[]>){

  this.http.post<any>(this.command_url,
    {
      "Produits":this.commandFormat(),
      "client":"/api/clients/2",
      "modeReception":false,
      "zone":"/api/zones/1"
    }).subscribe(data => {});

    tab.forEach(element => {this.panierService.removeCartItem(element)})
  }     

  choix(str:string):boolean{
    if(str==='surplace'){
      return true
    }
    if(str==='alivrer'){
      return false
    }
    return true;
  }
   
  setradio(e: string): void   
  {  
  
        this.selectedLink = e; 
        this.selectedZone = e;  
          
  } 
  setzone(e: string): void   
  {  
  
        this.selectedZone = e;  
          
  } 
  isSelected(name: string): boolean   
  {  
        if (!this.selectedLink) {  
            return false;  
  }  
        return (this.selectedLink === name);  
    }
    zoneChecked(zone:string):boolean{
      if(!this.zone){
        return false;
      }
      return (this.selectedZone===zone)
    }

}
