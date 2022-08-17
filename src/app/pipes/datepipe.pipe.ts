import { Pipe, PipeTransform } from '@angular/core';
import { CommandeService } from '../service/commande.service';

@Pipe({
  name: 'datepipe'
})
export class DatepipePipe implements PipeTransform {
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
