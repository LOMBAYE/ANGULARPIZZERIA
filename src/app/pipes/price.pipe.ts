import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
  
    return items.filter(item => {
      return Object.keys(item).some(key => {
        return String(item[key]).toUpperCase().startsWith(searchText.toUpperCase()) || String(item[key]).toUpperCase().includes(searchText.toUpperCase());
      });
    });
   }

}
