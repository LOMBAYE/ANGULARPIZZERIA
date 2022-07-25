import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

 
  subscription!: Subscription;
  ngOnInit():void{

    const observer={
      next: (item:string) =>console.log(`Kou bess ${item}`),
      error: (err:any) => console.log(`Kou bess ${err}`),
      complete: () => console.log('Complete')   
    }
    const Tra = new Observable<string>(nandite=>{
      nandite.next("Hello world!");
      nandite.next("Hello world!");
      nandite.next("Hello world!");
      nandite.error(2);
      nandite.complete();
    }
    ) 
  this.subscription=Tra.subscribe({
    next: (item:string) =>console.log(`Kou bess ${item}`),
    error: (err:any) => console.log(`Kou bess ${err}`),
    complete: () => console.log('Complete')  
  });

  setTimeout(() => this.subscription.unsubscribe(),7000);
  }
}
