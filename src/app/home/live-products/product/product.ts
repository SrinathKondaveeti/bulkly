import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bulkly-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Product {

  percent = input.required<number>();

}
