import { Component } from '@angular/core';
import { map, Observable, timer } from 'rxjs';

@Component({
  template: `
    <label>
      <input type="checkbox" [(ngModel)]="error"> Иммитировать ошибку
    </label>
    <label>
      <input type="checkbox" [(ngModel)]="zero"> Вернуть 0
    </label>

    <h2 *ngIf="someData$ | async as data; else loading">{{ data }}</h2>
    <ng-template #loading>
      <h2>Загрузочка...</h2>
    </ng-template>
  `,
})
export class AsyncComponent {

  error = false;
  zero = false;

  someData$: Observable<string | number> = timer(3000)
    .pipe(
      map(() => {
        if (this.error) {
          throw new Error('ERROR!');
        }
        
        if (this.zero) {
          return 0;
        }

        return 'Очень хорошо! Мы всё загрузили';
      }),
    );

}
