import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CatalogueService } from 'src/app/service/catalogue.service';
import { PanierService } from 'src/app/service/panier.service';
import { Burger } from 'src/models/Produits.model';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {
  @Input('produitRecu') produit!:Burger;
  constructor(private panierService:PanierService,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
   
  }
  ajouterAuPanier(produit:Burger){
      this.panierService.addToCart(produit);
  }
  transform(params: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, '+params);
  }
}
