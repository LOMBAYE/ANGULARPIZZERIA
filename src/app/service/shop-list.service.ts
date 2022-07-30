import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopListService {
  private totalPrice= new BehaviorSubject<number>(0);
  private quantity= new BehaviorSubject<number>(0);
  private total= new BehaviorSubject<number>(0);

  totalPrice$ = this.totalPrice.asObservable();
  total$ = this.total.asObservable();
  quantity$ = this.quantity.asObservable();


  constructor() { 

    let existingCartItems = JSON.parse(localStorage.getItem('produits')|| '[]');
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.totalPrice.next(existingCartItems);
    this.total.next(existingCartItems);
    this.quantity.next(existingCartItems);
  }
}
