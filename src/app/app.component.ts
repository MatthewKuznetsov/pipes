import { ChangeDetectorRef, Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading = true;
  omg = '';
  constructor(_cdr: ChangeDetectorRef) {
    of('OMG!')
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

