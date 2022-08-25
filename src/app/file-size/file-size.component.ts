import { Component } from '@angular/core';

@Component({
  template: `
    <h3>📁 Размеры файлов</h3>
    <ul>
      <!-- <li *ngFor="let file of files">
        {{ file.name }} - {{ file.size | fileSize: 2 }} ({{ file.size }} байт)
      </li> -->
      <li *ngFor="let file of files">
        {{ file.name }} - {{ bytesToUnits(file.size, 2) }} ({{ file.size }} байт)
      </li>
    </ul>
  `,
})
export class FileSizeComponent {

  files = [
    { name: 'foo.txt', size: 3_145_024 },
    { name: 'bar.txt', size: 3_279_624 },
    { name: 'baz.txt', size: 7_235_339_117 },
  ];

  bytesToUnits(bytes = 0, precision = 1): string {
    const units = ['байт', 'КБ', 'МБ', 'ГБ', 'ТБ', 'ПБ'];
    let unit = units[0];

    while (bytes >= 1024) {
      bytes /= 1024;
      unit = units[units.indexOf(unit) + 1];
    }

    return `${bytes.toFixed(precision)} ${unit}`;
  }

}
