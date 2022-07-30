import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Burger, Menu } from 'src/models/Produits.model';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
@Input() item!:any;
@Output() newItemEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.item.qte=10;
  }

  addNewItem(value: number) {
    this.newItemEvent.emit(value);
  }
  // valider(resultat:NgForm){
  //   console.log(resultat);
    
  // }
}
