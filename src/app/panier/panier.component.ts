import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PanierService } from '../service/panier.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  private selectedLink: string="false"; 
  choice:string='false'
  zone:string='false'
  private selectedZone:string=''
  constructor(private panierService: PanierService) { }

  totalPrice: number = 0;
  ngOnInit(): void {
  }
  items$?:Observable<any>=this.panierService.items$;
   
  purchase(){

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
  
        if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
            return false;  
  }  
  
        return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
    }
    zoneChecked(zone:string):boolean{
      if(!this.zone){
        return false;
      }
      return (this.selectedZone===zone)
    }  
}
