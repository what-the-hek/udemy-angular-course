import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
  standalone: true
})
export class ConvertPipe implements PipeTransform {

  transform(value: number): any {
    if (!value) return 0  
    return value * 1.60934;
  }

}
