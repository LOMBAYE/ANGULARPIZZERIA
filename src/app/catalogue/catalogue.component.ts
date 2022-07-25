import { Component, OnInit } from '@angular/core';
import { Burger, Catalogue, Menu } from 'src/models/Produits.model';
import { CatalogueService } from '../service/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  // search:string="filter";

  constructor(private cataServ:CatalogueService) { }

  tab:Catalogue={ menus:[],burgers:[]}; 
  
  produits:Menu[]|Burger[] = [];

  ngOnInit(): void {  
    this.tab = this.cataServ.getCatalogue();
    this.produits=this.tab.burgers.concat(this.tab.menus);
  }

}
