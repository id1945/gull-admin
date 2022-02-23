import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';

@Component({
  selector: 'app-list-pagination',
  templateUrl: './list-pagination.component.html',
  styleUrls: ['./list-pagination.component.scss'],
  animations: [SharedAnimations]
})
export class ListPaginationComponent implements OnInit {
  viewMode: 'list' | 'grid' = 'list';
  allSelected: boolean;
  page = 1;
  pageSize = 8;
  products: any[] = [];

  constructor(
    private dl: DataLayerService
  ) { }

  ngOnInit() {
    this.dl.getProducts()
    .subscribe((products: any[]) => {
      this.products = products;
    });
  }

  selectAll(e) {
    this.products = this.products.map(p => {
      p.isSelected = this.allSelected;
      return p;
    });

    if (this.allSelected) {

    }
    console.log(this.allSelected);
  }

}
