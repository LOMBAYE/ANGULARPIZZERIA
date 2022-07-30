import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { PanierService } from 'src/app/service/panier.service';
import { Burger, Menu } from 'src/models/Produits.model';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
@Input() item!:any;
@Output() newItemEvent = new EventEmitter<number>();

  constructor(private sanitizer:DomSanitizer,private panierService: PanierService) { }

  ngOnInit(): void {
    this.item.qte=10;
  }

  addNewItem(value: number) {
    this.newItemEvent.emit(value);
  }
  transform(params: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, '+params);
  }
  
  removeCartItem(product:Menu|Burger){
    this.panierService.removeCartItem(product);
  }
  // valider(resultat:NgForm){
  //   console.log(resultat);
    
  // }
}
