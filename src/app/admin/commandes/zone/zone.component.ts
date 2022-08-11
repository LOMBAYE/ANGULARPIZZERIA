import { Component, OnInit } from '@angular/core';
import { ZoneService } from '../../service/zone.service';
import { Commande, ligneDeCom, Zone } from 'src/models/Produits.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {
zone!:Zone
commandes:Commande[]=[];
idZone:number = 0;
tab:{}[]=[]
// ligneDeCom!:ligneDeCom[]

  constructor(private zoneServ:ZoneService,private actRoute:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
     this.idZone=+this.actRoute.snapshot.params['id']
    this.zoneServ.oneZone(this.idZone).subscribe(
      zone=>{
        zone.commandes.forEach(
          commande=>{
            if(commande.isEtat==='validée'){
              this.commandes.push(commande);
            }
          }
        )
    })
  }
deliver(){
  this.http.post<any>("http://127.0.0.1:8000/api/livraisons",
  {
    "commandes":this.tab,
    "zone": "/api/zones/"+this.idZone
  }).subscribe(data => {})

  // this.tab.forEach(el=>{
  //   this.http.put<any>("http://127.0.0.1:8000"+el, { 'isEtat': 'en livraison'}).subscribe(data => {})
  // })
  // location.reload();
}

filter(tab:any[]){
  return tab.filter(
     (element, i) => i === tab.indexOf(element))
 }
 
 checked(id:number){
  this.tab.push("/api/commandes/"+id)
 }
 
}
