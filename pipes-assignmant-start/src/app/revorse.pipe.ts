import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'revorse',
})
export class RevorsePipe implements PipeTransform {
  transform(value: any): any {
    return value.split('').reverse().join('');
  }
}
