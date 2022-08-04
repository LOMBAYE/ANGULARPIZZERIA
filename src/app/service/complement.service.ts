import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complement } from 'src/models/Produits.model';

@Injectable({
  providedIn: 'root'
})
export class ComplementService {

  constructor(private http:HttpClient) { }
  url="http://127.0.0.1:8000/api/complements";

  getComplements():Observable<Complement>{
    return this.http.get<Complement>(this.url)
  }
}
