import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogueService } from 'src/app/service/catalogue.service';
import { PanierService } from 'src/app/service/panier.service';

@Component({
  selector: 'app-details-menu',
  templateUrl: './details-menu.component.html',
  styleUrls: ['./details-menu.component.css']
})
export class DetailsMenuComponent implements OnInit {
  [x: string]: any;
  product!:any;

  constructor(private r:ActivatedRoute,private cataServ:CatalogueService,
    private router:Router,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    const idProduit = +this.r.snapshot.params['id'];
    this.cataServ.findProduit(idProduit).subscribe(
      menu=>{
        this.product=menu       
      })
    
  }

  transform(params: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, '+params);
  }
  // ajouterAuPanier(produit:any){
  //     this._panierService.addToCart(produit);
  // }
}
