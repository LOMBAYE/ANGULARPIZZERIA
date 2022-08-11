import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeService } from 'src/app/service/commande.service';
import { Commande,Zone } from 'src/models/Produits.model';
import { ZoneService } from '../service/zone.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

  commandes:Commande[]=[];
  tabs:any=[]
  index:number=1;
  search=this.comServ.nowDate();
zones:Zone[]=[]
  
  constructor(private comServ:CommandeService,private http:HttpClient,private router:Router,
    private zoneServ:ZoneService) { }
  
    ngOnInit(): void {
      const now=this.comServ.nowDate();
          this.comServ.commandes().subscribe(
        data=>{
          this.commandes=data;
          data.forEach(
            res=>{
                this.tabs.push(this.comServ.splitDate(res.date.toString()))
              })
        }
      )
      this.zoneServ.getZones().subscribe(
        zones=>{
          // this.zones=zones;
          zones.forEach(
            zone=>{
              if(zone.commandes.length!=0){
                this.zones.push(zone);
              }
            })
        })  
    }
  sameDate(tab:string[]){
   return tab.filter(
      (element, i) => i === tab.indexOf(element))
  }
  
  changeState(id:number,toDo:string){
      this.http.put<any>("http://127.0.0.1:8000/api/commandes/"+id, { 'isEtat': toDo}).subscribe(data => {})
      location.reload();
  }
  
  cancelled(command:Commande){
    if(command.isEtat=='en cours'|| command.isEtat=='validée' ){
      return false
    }
    return true
  }
  validated(command:Commande):boolean{
    if(command.isEtat=='validée'){
      return true
    }
    return false
  }
  
  encours(command:Commande):boolean{
    if(command.isEtat==='validée'||command.isEtat=='annulée'){
      return false
    }
    return true
  }
}