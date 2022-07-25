import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td',
  templateUrl: './td.component.html',
  styleUrls: ['./td.component.css']
})
export class TdComponent implements OnInit {

  // @ViewChild('test') resultat!:NgForm;
  //pour aussi recuperer les results this.resultat dans valider

  personne:{nom:string,prenom:string,type:string}={nom:"Diop",prenom:"Aly",type:"full"}
  constructor() { }

  ngOnInit(): void {
  }

  valider(resultat:NgForm){
    console.log(resultat);
    
  }

}
