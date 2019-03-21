import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeView'
})
export class TimeViewPipe implements PipeTransform {

  transform(value: number, args?: any): any {

    const hours = Math.round(value / 3600);
    const hoursRem = Math.round(value % 3600);
    const min = Math.round(hoursRem / 60);
    const secs = Math.round(hoursRem % 60);
    return `${hours}h ${min}m ${secs}s`;
  }

}
