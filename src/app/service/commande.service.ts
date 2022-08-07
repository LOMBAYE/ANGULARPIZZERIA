import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commande, CommandeDunClient } from 'src/models/Produits.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) { }

  commandesDunClient(id:number):Observable<CommandeDunClient>{
    return this.http.get<CommandeDunClient>("http://127.0.0.1:8000/api/clients/"+id);
  }
  commandes():Observable<any>{
    return this.http.get<any>("http://127.0.0.1:8000/api/commandes");
  }
  oneCommande(id:number):Observable<Commande>{
    return this.http.get<any>("http://127.0.0.1:8000/api/commandes/"+id);  
  }
}
