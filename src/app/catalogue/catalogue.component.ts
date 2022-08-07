import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Burger, Catalogue, Menu } from 'src/models/Produits.model';
import { CatalogueService } from '../service/catalogue.service';
import { PanierService } from '../service/panier.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  search:string="";

  constructor(private cataServ:CatalogueService,private domSan:DomSanitizer ) { }

  products:Menu[] |Burger[]=[];

catalogue!:Catalogue
menus!:Menu[];
burgers!:Burger[];
  ngOnInit(): void {

      this.cataServ.getCatalogue().subscribe(
        response=>{
          this.burgers=response.burgers;
          this.menus=response.menus;
          // console.log(this.menus);
        }
        );
        
  }

}
