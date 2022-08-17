import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/models/Produits.model';
import { ProduitsService } from '../service/produits.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
products:Produit[]=[]
search:string = ''
// selected: string='';

  constructor(private prodServ:ProduitsService) { }

  ngOnInit(): void {
      this.prodServ.allProducts().subscribe(
        products => {
          this.products = products;
          // console.log(products);
        })
  }
  selectedProduct(e:any){
    console.log(e.target.value);
   this.prodServ.setValue(e.target.value);
  }
}
