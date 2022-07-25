import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'brasilBurger';
  ngOnInit():void{}
  // this.subscription=Tra.subscribe({
  //   next: (item:string) =>console.log(`Kou bess ${item}`),
  //   error: (err:any) => console.log(`Kou bess ${err}`),
  //   complete: () => console.log('Complete')  
  // });

  // setTimeout(() => this.subscription.unsubscribe(),7000);
  // }
}
