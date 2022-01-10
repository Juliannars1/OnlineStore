import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expopipes'
})
export class ExpopipesPipe implements PipeTransform {

  transform(value: number): any {
    return Math.pow(value, 2);
  }


}
