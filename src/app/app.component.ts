import { ChangeDetectorRef, Component } from '@angular/core';
import { map, of, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading = true;
  omg = '';
  constructor(_cdr: ChangeDetectorRef) {
    timer(3000)
      .pipe(map(() => 'OMG!'))
      .subscribe({
        next: (e) => {
          this.omg = e;
          this.loading = false;
          _cdr.markForCheck();
        },
        error: () => {
          this.loading = false;
          _cdr.markForCheck();
        },
        complete: () => {
          this.loading = false;
          _cdr.markForCheck();
        }
      });
  }
}

