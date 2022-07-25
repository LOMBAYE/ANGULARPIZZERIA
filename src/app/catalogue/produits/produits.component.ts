import { Component, Input, OnInit } from '@angular/core';
import { Burger, Menu } from 'src/models/Produits.model';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  
@Input('produitRecu') produit!:Burger |Menu;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.produit);
  }

}
