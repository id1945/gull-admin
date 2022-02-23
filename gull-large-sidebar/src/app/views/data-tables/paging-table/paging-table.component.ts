import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-paging-table',
  templateUrl: './paging-table.component.html',
  styleUrls: ['./paging-table.component.scss']
})
export class PagingTableComponent implements OnInit {

  products$;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

}
