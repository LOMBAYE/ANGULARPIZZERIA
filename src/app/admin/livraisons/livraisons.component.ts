import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Livraison } from 'src/models/Produits.model';
import { LivraisonService } from '../service/livraison.service';

@Component({
  selector: 'app-livraisons',
  templateUrl: './livraisons.component.html',
  styleUrls: ['./livraisons.component.css']
})
export class LivraisonsComponent implements OnInit {
livraisons: Livraison[] = [];
  constructor(private http:HttpClient,private livServ:LivraisonService) { }

  ngOnInit(): void {
    this.livServ.livraisons().subscribe(
      data => {
        this.livraisons =data
        // console.log(data);
      })
  }

  etatLiv(bool:boolean):string{
    if(bool){
      return 'en cours de livraison';
    }
    return 'terminée';
  }
}
