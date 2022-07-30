import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogueService } from 'src/app/service/catalogue.service';
import { Burger } from 'src/models/Produits.model';

@Component({
  selector: 'app-details-burger',
  templateUrl: './details-burger.component.html',
  styleUrls: ['./details-burger.component.css']
})
export class DetailsBurgerComponent implements OnInit {
  product!:Burger;

  constructor(private r:ActivatedRoute,private cataServ:CatalogueService,
    private router:Router,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    const idProduit = +this.r.snapshot.params['id'];
    this.cataServ.findBurger(idProduit).subscribe(data => {
      this.product=data;     
    });
  }
  
  transform(params: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, '+params);
  }

}
