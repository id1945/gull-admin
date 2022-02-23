import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tag-inputs',
  templateUrl: './tag-inputs.component.html',
  styleUrls: ['./tag-inputs.component.scss']
})
export class TagInputsComponent implements OnInit {
  items = ['Javascript', 'Typescript'];
  autocompletes$;
  tagsCtrl1 = new FormControl(this.items);
  tagsCtrl2 = new FormControl([{display: 'Bangladesh', value: 'BD'}]);


  constructor(
    private dl: DataLayerService
  ) { }

  ngOnInit() {
    this.autocompletes$ = this.dl.getCountries();
  }

  public onSelect(item) {
    console.log('tag selected: value is ' + item);
  }

}
