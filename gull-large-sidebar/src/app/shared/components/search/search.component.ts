import { Component, OnInit } from '@angular/core';
import { DataLayerService } from '../../services/data-layer.service';
import { Observable, combineLatest } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, debounceTime, switchMap, map } from 'rxjs/operators';
import { SharedAnimations } from '../../animations/shared-animations';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [SharedAnimations]
})
export class SearchComponent implements OnInit {
  page = 1;
  pageSize = 6;

  results$: Observable<any[]>;
  searchCtrl: FormControl = new FormControl('');

  constructor(
    private dl: DataLayerService,
    public searchService: SearchService
  ) { }

  ngOnInit() {

    this.results$ = combineLatest(
      this.dl.getProducts(),
      this.searchCtrl.valueChanges
      .pipe(startWith(''), debounceTime(200))
    )
    .pipe(map(([products, searchTerm]) => {
      return products.filter(p => {
        return p.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      });
    }));
  }

}
