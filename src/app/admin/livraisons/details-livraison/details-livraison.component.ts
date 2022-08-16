import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commande, Livraison } from 'src/models/Produits.model';
import { LivraisonService } from '../../service/livraison.service';

@Component({
  selector: 'app-details-livraison',
  templateUrl: './details-livraison.component.html',
  styleUrls: ['./details-livraison.component.css']
})
export class DetailsLivraisonComponent implements OnInit {
livraison!:Livraison
commandes:Commande[]=[];
  livId!:number
  constructor(private actRoute:ActivatedRoute,private http:HttpClient,private livServ:LivraisonService) { }

  ngOnInit(): void {
    this.livId=+this.actRoute.snapshot.params['id'];
    // console.log(this.livId);
    this.livServ.oneLivraison(this.livId).subscribe(
      data =>{
        this.commandes=data.commandes;
        console.log(data.commandes);
      })
    
  }
  changeState(id:number,toDo:string){
    this.http.put<any>("http://127.0.0.1:8000/api/commandes/"+id, { 'isEtat': toDo}).subscribe(data => {})
    location.reload();
}


}
