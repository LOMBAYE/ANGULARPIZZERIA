import { Injectable } from '@angular/core';
import { Burger } from 'src/models/Produits.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  private burgers:Burger[]=[{
    id: 1,
    nom:"CHEESE BURGER",
    prix:2000,
    image:'yuiop'
  },
  {
    id: 1,
    nom:"CHEESE BURGER",
    prix:2000,
    image:'yuiop'
  },
  {
    id: 1,
    nom:"CHEESE BURGER",
    prix:2000,
    image:'yuiop'
  }
  ];


  constructor() { }
  getBurgers():Burger[]{
    return this.burgers;
  }
}
