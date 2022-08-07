import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogueService } from 'src/app/service/catalogue.service';
import { PanierService } from 'src/app/service/panier.service';
import { ProduitsService } from 'src/app/service/produits.service';
import { Boissons, BoissonT, Menu, Taille } from 'src/models/Produits.model';

@Component({
  selector: 'app-details-menu',
  templateUrl: './details-menu.component.html',
  styleUrls: ['./details-menu.component.css']
})
export class DetailsMenuComponent implements OnInit {
  product!:Menu;
  menus!:Menu[];
  tailles!:Taille[];
boissons!:Boissons[];
boissonsT!:BoissonT[];
nbr:number=0

quantite!:number;
  constructor(private r:ActivatedRoute,private cataServ:CatalogueService,
    private router:Router,private sanitizer:DomSanitizer,
    private prodServ:ProduitsService,private panierService:PanierService) { }

  ngOnInit(): void {
    this.r.params.subscribe(
      data=>{
      let idProduit = +this.r.snapshot.params['id'];
      this.cataServ.findMenu(idProduit).subscribe(
        menu=>{
          this.product=menu 
        this.boissonsT=menu.tailles
        this.boissonsT.forEach(boissonT=>{
          this.quantite=boissonT.quantite;
          // console.log(this.quantite);
        })
   console.log(this.product.tailles);            
        })     
   
        this.prodServ.findAllBoissons(idProduit).subscribe(
          res=>{
           this.boissons=res;
          //  console.log(res);    
          }
        )
        this.cataServ.getCatalogue().subscribe(
          response=>{
            this.menus=response.menus;
          }
          );
        } )
  
   
  }

  transform(params: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, '+params);
  }
  ajouterAuPanier(produit:Menu){
    this.panierService.addToCart(produit);
}

  listen(e: string){
    alert('ha');
    this.nbr++
    console.log(this.nbr);
  }

etat!:boolean
  increase(input:any){
    if(5>this.inputValues()){
      input.value++;
      this.etat=false;
      console.log(this.inputValues());
    }
    else{
      this.etat=true;
    }
  }

  a(input:any,tab:BoissonT[]){
    // console.log(input.parentElement.parentElement.previousSibling.innerText);
  tab.forEach(
    item=>{
      if(item.quantite<this.inputValues())

      alert('gggg');
    }
    )  

  }
  
  decrease(input:any){
    // alert('moins')
    if(input.value>=1){
      this.etat=false;
      input.value--;
    }
  }

  inputValues(){
    let som=0;
    const inputs=document.querySelectorAll('input');
    inputs.forEach(
      input =>{
        som+=+input.value;
      } )
      return som;
  }
}
