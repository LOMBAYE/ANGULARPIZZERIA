import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map,take } from 'rxjs/operators';

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

  // addToCart(num: number) {
  //   this.quantity$.pipe(
  //     take(1),
  //     map((products) => {
  //       products.add(num);
  //       localStorage.setItem('products', JSON.stringify(products));
  //     }),
  //   ).subscribe();
  // }
}
