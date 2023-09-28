import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate' })
export class Truncate implements PipeTransform {
  transform(value: string, maxLength: number = 1): string {
    return value.length > maxLength
      ? value.substring(0, maxLength) + '...'
      : value.substring(0, length);
  }
}
