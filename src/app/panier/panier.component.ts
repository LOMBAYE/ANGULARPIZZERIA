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
  ngOnInit(): void {
  }

  items$=this.panierService.items$;
   
  purchase(tab:Observable<any[]>){
    tab.forEach(element => {
  this.panierService.removeCartItem(element);
  })
// alert('a ajouter a la base');
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
    
    commander(products:{modeReception:boolean,tab:ligneDeCom[],idClient:number,zone?:number}){
      //  // Simple POST request with a JSON body and response type <any>
      this.http.post<any>(this.command_url, { title: 'Angular POST Request Example' }).subscribe(data => {
        // this.postId = data.id;
    })
      console.log(products);
    }
}
