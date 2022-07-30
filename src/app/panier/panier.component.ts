import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PanierService } from '../service/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(private panierService: PanierService) { }

  totalPrice: number = 0;
  ngOnInit(): void {
  }
  items$?:Observable<any>=this.panierService.items$;
   
}
