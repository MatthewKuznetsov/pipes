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

    <ng-container
      *ngIf="someData$ | loading | async as loader"
      [ngSwitch]="loader.status"
    >
      <h2 *ngSwitchCase="'completed'">{{ loader.value }}</h2>
      <h2 *ngSwitchCase="'loading'">Загрузочка...</h2>
      <h2 *ngSwitchCase="'error'">Ошибочка...</h2>
    </ng-container>
  `,
})
export class LoadingComponent {

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