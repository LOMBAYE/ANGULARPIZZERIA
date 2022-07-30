import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogueService } from 'src/app/service/catalogue.service';
import { PanierService } from 'src/app/service/panier.service';
import { ProduitsService } from 'src/app/service/produits.service';
import { Boissons, Menu, Taille } from 'src/models/Produits.model';

@Component({
  selector: 'app-details-menu',
  templateUrl: './details-menu.component.html',
  styleUrls: ['./details-menu.component.css']
})
export class DetailsMenuComponent implements OnInit {
  product!:Menu;
  tailles!:[];
boissons!:Boissons[];
  constructor(private r:ActivatedRoute,private cataServ:CatalogueService,
    private router:Router,private sanitizer:DomSanitizer,
    private prodServ:ProduitsService,private panierService:PanierService) { }

  ngOnInit(): void {
    const idProduit = +this.r.snapshot.params['id'];
    this.cataServ.findMenu(idProduit).subscribe(
      menu=>{
        this.product=menu      
      })

      this.prodServ.findMenuTaille(idProduit).subscribe(
        response=>{
          // console.log(response);
          this.tailles=response;
        }
      )
      this.prodServ.findAllBoissonTailles(idProduit).subscribe(
        res=>{
        //  console.log(res);    
        }
      )
         this.prodServ.collectionOfBoissons(10).subscribe(
            a=>{
              // console.log(a);
              
            }
          )
      this.prodServ.findAllBoissons(idProduit).subscribe(
        res=>{
         this.boissons=res;
        //  console.log(res);    
        }
      )
   
  }
  // show():boolean{
  //   return true
  // }
  transform(params: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, '+params);
  }
  ajouterAuPanier(produit:Menu){
    this.panierService.addToCart(produit);
}
  
}
