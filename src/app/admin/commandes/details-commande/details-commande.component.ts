import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommandeService } from 'src/app/service/commande.service';
import { Commande, ligneDeCom } from 'src/models/Produits.model';

@Component({
  selector: 'app-details-commande',
  templateUrl: './details-commande.component.html',
  styleUrls: ['./details-commande.component.css']
})
export class DetailsCommandeComponent implements OnInit {

  ligneDeCom!:ligneDeCom[]
commande!:Commande;

  constructor(private comSer:CommandeService,private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
   const idCommande=+this.actRoute.snapshot.params['id'];
    this.comSer.oneCommande(idCommande).subscribe(
      commande =>{
        this.ligneDeCom=commande.Produits;
        this.commande=commande;
      })

  }
  modeRec(bool:boolean):string{
    if(bool){
      return 'Sur Place';
    }
    return 'Par livraison';
  }

}
