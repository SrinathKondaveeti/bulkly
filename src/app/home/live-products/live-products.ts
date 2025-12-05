import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Product } from "./product/product";

@Component({
  selector: 'bulkly-live-products',
  imports: [Product],
  templateUrl: './live-products.html',
  styleUrl: './live-products.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LiveProducts {

}
