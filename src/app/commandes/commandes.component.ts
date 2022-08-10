import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from 'src/models/Produits.model';
import { CommandeService } from '../service/commande.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
commandes:Commande[]=[];
tabs:any=[]
index:number=1;
search='';
toDo='Valider'
constructor(private comServ:CommandeService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    const now=this.comServ.nowDate();
        this.comServ.commandes().subscribe(
      data=>{
        data.forEach(
          res=>{
            if(this.comServ.splitDate(res.date.toString())===now){
              this.commandes.push(res);
            }
              this.tabs.push(this.comServ.splitDate(res.date.toString()))
            })
      }
    )
    // console.log((this.tabs))
  }
sameDate(tab:string[]){
 return tab.filter(
    (element, i) => i === tab.indexOf(element))
}

changeState(id:number,toDo:string){
  if(toDo=="annulée"){
    this.http.put<any>("http://127.0.0.1:8000/api/commandes/"+id, { 'isEtat': 'annulée' }).subscribe(data => {
    })
  }else if(toDo=="validée"){
    this.http.put<any>("http://127.0.0.1:8000/api/commandes/"+id, { 'isEtat': 'validée' }).subscribe(data => {
    })
  }
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
