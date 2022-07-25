import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogueService } from 'src/app/service/catalogue.service';
import { Burger, Menu } from 'src/models/Produits.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product!:Menu |Burger;
  constructor(private r:ActivatedRoute,private cataServ:CatalogueService) { }

  ngOnInit(): void {
    // snapshot.params pour recuperer l id du bien
    const idProduit = +this.r.snapshot.params['id'];
    // type of idProduit est string ajoute + pour le mettre en number    
    this.cataServ.findProduitById(idProduit);    
  }

}
