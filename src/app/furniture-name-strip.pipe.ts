import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'furnitureNameStrip'
})
export class FurnitureNameStripPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let name = value.split("; ")[1];

    return name ? name : value;
  }

}
