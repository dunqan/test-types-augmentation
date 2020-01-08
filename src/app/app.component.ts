import { Component } from '@angular/core';
import {Product} from '@spartacus/core';
import {ExtraOptions} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-types-augmentation';
}

declare module '@spartacus/core' {
  export interface Product {
    zuza: string;
  }
}


export const c: Product = {
  // code: 'dsdsa',
  zuza: 'dsadsa'
};


export const a: ExtraOptions = {
  enableTracing: true,
  sla: 'dsadsa'
};
