import { Component, OnInit, Input } from '@angular/core';
declare var feather;

@Component({
  selector: 'feather-icon',
  templateUrl: './feather-icon.component.html',
  styleUrls: ['./feather-icon.component.scss']
})
export class FeatherIconComponent implements OnInit {
  @Input('name') public name;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      feather.replace();
    });
  }

}
