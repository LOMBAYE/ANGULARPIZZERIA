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

commandes!:Commande[];

  constructor(private comServ:CommandeService,private http:HttpClient,private router:Router) { }
  index:number=1;

  ngOnInit(): void {
    this.comServ.commandes().subscribe(
      data=>{
        this.commandes = data;
      }
    )
  }
cancelCommand(id:number){
  this.http.put<any>("http://127.0.0.1:8000/api/commandes/"+id, { 'isEtat': 'annuler' }).subscribe(data => {
})}

// cancelled=true;

cancelled(command:Commande):boolean{
  if(command.isEtat=='annuler'){
    return true
  }
  return false
}


}
