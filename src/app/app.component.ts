import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'brasilBurger';
  constructor(private sanitizer:DomSanitizer){

  }
  ngOnInit():void{}
  // this.subscription=Tra.subscribe({
  //   next: (item:string) =>console.log(`Kou bess ${item}`),
  //   error: (err:any) => console.log(`Kou bess ${err}`),
  //   complete: () => console.log('Complete')  
  // });
  transform(params: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, '+params);
  }
  // setTimeout(() => this.subscription.unsubscribe(),7000);
  // }
}
