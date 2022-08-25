import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fileSize' })
export class FileSizePipe implements PipeTransform {
  private units = ['байт', 'КБ', 'МБ', 'ГБ', 'ТБ', 'ПБ'];

  transform(bytes = 0, precision = 1): string {
    let unit = this.units[0];

    while (bytes >= 1024) {
      bytes /= 1024;
      unit = this.units[this.units.indexOf(unit) + 1];
    }

    return `${bytes.toFixed(precision)} ${unit}`;
  }
}
