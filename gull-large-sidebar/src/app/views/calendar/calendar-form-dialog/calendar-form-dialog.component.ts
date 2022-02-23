import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CalendarAppEvent } from 'src/app/shared/models/calendar-event.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Utils } from 'src/app/shared/utils';

interface DialogData {
  event?: CalendarEvent;
  action?: string;
  date?: Date;
}
@Component({
  selector: 'app-calendar-form-dialog',
  templateUrl: './calendar-form-dialog.component.html',
  styleUrls: ['./calendar-form-dialog.component.scss']
})
export class CalendarFormDialogComponent implements OnInit {
  data: DialogData;
  event: CalendarEvent;
  dialogTitle: string;
  eventForm: FormGroup;
  action: string;
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    setTimeout(() => {
      if (this.action === 'edit') {
        this.dialogTitle = this.event.title;
      } else {
        this.dialogTitle = 'Add Event';
        this.event = new CalendarAppEvent(this.data.event);
      }
      this.eventForm = this.buildEventForm(this.event);

    }, 100);
    this.eventForm = this.buildEventForm(this.event);

  }
  buildEventForm(event: CalendarAppEvent = {start: null, title: null, color: {primary: '', secondary: ''}, meta: {location: '', notes: ''}}) {
    return new FormGroup({
      _id: new FormControl(event._id),
      title: new FormControl(event.title, Validators.required),
      start: new FormControl(Utils.dateToNgbDate(event.start), Validators.required),
      end: new FormControl(Utils.dateToNgbDate(event.end)),
      allDay: new FormControl(event.allDay),
      color: this.formBuilder.group({
        primary: new FormControl(event.color.primary),
        secondary: new FormControl(event.color.secondary)
      }),
      meta: this.formBuilder.group({
        location: new FormControl(event.meta.location),
        notes: new FormControl(event.meta.notes)
      })
    });
  }

}
