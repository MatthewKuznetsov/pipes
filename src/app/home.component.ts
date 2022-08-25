import { Component } from '@angular/core';

@Component({
  template: `<span *ngFor="let pipe of pipes">{{ pipe }}</span>`,
})

export class HomeComponent {
  pipes = new Array(1000).fill('пайпы ');
}
