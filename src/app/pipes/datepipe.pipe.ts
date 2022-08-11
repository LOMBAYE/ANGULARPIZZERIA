import { Pipe, PipeTransform } from '@angular/core';
import { CommandeService } from '../service/commande.service';

@Pipe({
  name: 'datepipe'
})
export class DatepipePipe implements PipeTransform {
  constructor(private comServ:CommandeService){

  }
  transform(value: any, search: string,date:any): any {
    const now=this.comServ.nowDate();

    if(value.length===0 || search.length===0){
      return value;
    }
    const results=[]
    for (let val of value) {
      if(val[this.comServ.splitDate(date.toString())]== search ){
        results.push(val);
      }
    }
    return results;
  }

}
