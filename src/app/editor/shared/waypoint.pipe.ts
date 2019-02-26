import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'waypoint'
})
export class WaypointPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
