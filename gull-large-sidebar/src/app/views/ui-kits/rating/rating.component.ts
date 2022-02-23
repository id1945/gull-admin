import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
    currentRate = 8;
    heartRating = 3;
    demoRating = 4.4;
    constructor() { }

    ngOnInit() {
    }

}
