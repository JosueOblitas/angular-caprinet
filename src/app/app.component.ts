import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Product Management</h1>
      <app-product-list></app-product-list>
    </div>
  `,
})
export class AppComponent {}
