import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, search: string,toSearch:string): any {
    if(value.length===0 || search.length===0){
      return value;
    }
    const results=[]
    for (let val of value) {
      // if(val[toSearch].startsWith(search)){
      // if(val[toSearch].includes(search)){
      if(val[toSearch]==search ||val[toSearch].startsWith(search) ||val[toSearch].includes(search)){
        results.push(val);
      }
    }
    return results;
  }

}
