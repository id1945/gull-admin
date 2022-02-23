import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-fullscreen-table',
  templateUrl: './fullscreen-table.component.html',
  styleUrls: ['./fullscreen-table.component.scss']
})
export class FullscreenTableComponent implements OnInit {
  products$;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

}
