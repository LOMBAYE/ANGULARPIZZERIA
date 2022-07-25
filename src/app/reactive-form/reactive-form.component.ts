import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  // prenom=new FormControl("rawane");
  // on peut initialize des valeurs en passant en parameter dans new FormControl
  groupe :FormGroup=new FormGroup(
    {
      prenom:new FormControl(),
      nom:new FormControl(),
      age:new FormControl()
    }
  );
  constructor() { }
recuperer(){
  console.log(this.groupe.value);
  // console.log(this.groupe.value.prenom) pour acceder au prenom;
}
// patchValue pour une variable et setValue pour tout le groupe
entrer(){
this.groupe.patchValue({
  prenom:"MBAYE"
})
}
  // setValue(){
  //   this.prenom.setValue('tening');
  // }
  ngOnInit(): void {
    // this.setValue();
    this.entrer();
  }

}
