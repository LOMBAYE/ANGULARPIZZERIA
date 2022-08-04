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

  constructor(private comServ:CommandeService) { }

  ngOnInit(): void {

    this.comServ.commandesDunClient(2).subscribe(
      res =>{
        this.commandesDunClient = res;
        this.commandes = this.commandesDunClient.commandes;
        
    })
  }

}
