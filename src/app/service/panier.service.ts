import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { map,take } from 'rxjs/operators';
import { Menu } from 'src/models/Produits.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  
  
  private itemsSubject = new BehaviorSubject<any[]>([]);
  
  items$:Observable<any> = this.itemsSubject.asObservable();

  constructor() { 
    let existingCartItems = JSON.parse(localStorage.getItem('produits')|| '[]');
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
  }

// getItemsSubject(){
//   return this.itemsSubject;
// }

  addToCart(product: any) {
    this.items$.pipe(
      take(1),
      map((products) => {
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
      }),
    ).subscribe();
  }

removeCartItem(product: any){
    this.items$.pipe(
      take(1),
      map((products:any[]) => {
        products.splice(products.indexOf(product), 1);
        this.itemsSubject.next(products);
        localStorage.setItem('products', JSON.stringify(products));
      }),
    ).subscribe();
}
 addToCartt(product: any):void {
    let index = 0
    let found = false;
    this.items$.pipe(
      take(1),
      map((products:any[]) => {

        products.forEach((prod, i) => {
          if (prod.id === product.id) {
              found = true
              index =i
          }
         })
          if (found) {
              product.qte++
            products[index]=product;
          }else{

            product.qte = 1
            products.push(product)
          }
        this.itemsSubject.next(products);
        localStorage.setItem('products', JSON.stringify(products));
      }),
    ).subscribe();
  }
}

