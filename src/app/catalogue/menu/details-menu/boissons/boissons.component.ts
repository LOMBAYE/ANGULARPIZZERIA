import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProduitsService } from 'src/app/service/produits.service';
import { Boissons } from 'src/models/Produits.model';

@Component({
  selector: 'app-boissons',
  templateUrl: './boissons.component.html',
  styleUrls: ['./boissons.component.css']
})
export class BoissonsComponent implements OnInit {
@Input() boisson!:Boissons
qte:number = 0;
  constructor(private sanitizer:DomSanitizer,private prodServ: ProduitsService) { }

  ngOnInit(): void {
    // console.log('rrrrr');
  }
  update(n:number){
    // console.log(this.boisson);
    if((this.qte==0 && n<0)|| (this.prodServ.tabQteBoisson[this.boisson.idBoisson].somQte==
      this.prodServ.tabQteBoisson[this.boisson.idBoisson].qteBoisson && n>0)){
        return;
      }
      this.qte+=n;
      this.prodServ.tabQteBoisson[this.boisson.idBoisson].somQte+=n;
  }

  transform(params: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, '+params);
  }
}
