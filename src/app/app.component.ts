import { Component } from '@angular/core';
import {Product} from '@spartacus/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-types-augmentation';
}
//
// declare module '@spartacus/core' {
//   export interface Product {
//     zuza: string;
//   }
// }


export const c: Product = {
  // code: 'dsdsa',
  zuza: 'dsadsa'
};
