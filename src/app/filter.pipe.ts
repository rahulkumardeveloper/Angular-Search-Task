import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    console.log(value);
    if (args) {
      return value.filter((val:any) => {
        let rVal = val.name.toLowerCase().includes(args);
        return rVal;
      })
    }
    return value;

  }

}
