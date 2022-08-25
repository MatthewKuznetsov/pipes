import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';

const enum Statuses {
  ERROR = 'error',
  COMPLETED = 'completed',
  LOADING = 'loading',
} 

export interface ILoadingData<D> {
  status: 'loading' | 'completed' | 'error';
  value?: D;
  error?: any;
}

@Pipe({ name: 'loading' })
export class LoadingPipe implements PipeTransform {
  transform<T>(
    input: Observable<T>
  ): Observable<ILoadingData<T>> {

    return input.pipe(
      map((value) => ({
        status: Statuses.COMPLETED,
        value,
      })),
      startWith({
        status: Statuses.LOADING,
      }),
      catchError((error) => of({
        status: Statuses.ERROR,
        error,
      }))
    );

  }
}
