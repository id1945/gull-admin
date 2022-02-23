import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-compose-dialog',
  templateUrl: './compose-dialog.component.html',
  styleUrls: ['./compose-dialog.component.scss']
})
export class ComposeDialogComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}
