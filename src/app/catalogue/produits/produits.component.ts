import { Component, Input, OnInit } from '@angular/core';
import { PanierService } from 'src/app/service/panier.service';
import { Burger, Menu } from 'src/models/Produits.model';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  
@Input('produitRecu') produit!:Burger |Menu;

noAddToListIfMenu: boolean = false;
  constructor(private panierService:PanierService) { }

  ngOnInit(): void {
    // console.log(this.produit);
  }

  ajouterAuPanier(produit:Burger|Menu){
    // if(this.noAddToListIfMenu){

      this.panierService.addToCart(produit);
    // }
  }
 
}
