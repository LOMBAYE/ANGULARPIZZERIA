import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/service/commande.service';
import { Commande, CommandeDunClient } from 'src/models/Produits.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
commandesDunClient!:CommandeDunClient
commandes!:Commande[]

  constructor(private comServ:CommandeService,private http:HttpClient) { }

  ngOnInit(): void {

    this.comServ.commandesDunClient(2).subscribe(
      res =>{
        console.log(res);
        
        this.commandesDunClient = res;
        this.commandes = this.commandesDunClient.commandes;
    })
  }
  modeRec(bool:boolean):string{
    if(bool){
      return 'Sur Place';
    }
    return 'Par livraison';
  }

  cancelCommand(id:number){
    this.http.put<any>("http://127.0.0.1:8000/api/commandes/"+id, { 'isEtat': 'annulee' }).subscribe(data => {
  })}
  
  // cancelled=true;
  
  cancelled(command:Commande):boolean{
    if(command.isEtat=='annulée'){
      return true
    }
    return false
  }
}
