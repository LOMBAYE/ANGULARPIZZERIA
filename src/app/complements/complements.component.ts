import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BoissonT, Complement, Frites } from 'src/models/Produits.model';
import { ComplementService } from '../service/complement.service';

@Component({
  selector: 'app-complements',
  templateUrl: './complements.component.html',
  styleUrls: ['./complements.component.css']
})
export class ComplementsComponent implements OnInit {
// complements!:Complement[]
frites!:Frites[]
boissonsT!:BoissonT[]

  constructor(private compServ: ComplementService,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.compServ.getComplements().subscribe(
      complements => {
        this.frites=complements.frites;
        this.boissonsT=complements.boissonsT;

        // console.log(complements.boissonsT);
        
    })
  }

  transform(params: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, '+params);
  }
}
