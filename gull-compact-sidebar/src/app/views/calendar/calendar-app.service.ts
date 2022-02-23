import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { CalendarEventDB } from '../../shared/inmemory-db/calendarEvents';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CalendarAppEvent } from 'src/app/shared/models/calendar-event.model';
import { CalendarEventDB } from 'src/app/shared/inmemory-db/calendar-events';

@Injectable({
  providedIn: 'root'
})
export class CalendarAppService {
  public events: CalendarAppEvent[];
  constructor(
    private http: HttpClient
  ) {}

  public getEvents(): Observable<CalendarAppEvent[]> {
    // return this.http.get('api/calendar/events')
    // .map((events: CalendarEvent[]) => {
    //   this.events = events;
    //   return events;
    // });

    const eventDB = new CalendarEventDB();
    return of(eventDB.events)
      .pipe(
        map(events => {
          this.events = events;
          return events;
        })
      );
  }

  public addEvent(event): Observable<CalendarAppEvent[]> {
    // return this.http.post('api/calendar/events', event)
    // .map((events: CalendarAppEvent[]) => {
    //   this.events = events;
    //   return events;
    // });

    this.events.push(event);
    return of(this.events);
  }

  public updateEvent(event): Observable<CalendarAppEvent[]> {
    // return this.http.put('api/calendar/events/'+event._id, event)
    // .map((events: CalendarAppEvent[]) => {
    //   this.events = events;
    //   return events;
    // });

    this.events = this.events.map(e => {
      if (e._id === event._id) {
        return Object.assign(e, event);
      }
      return e;
    });
    return of(this.events);
  }

  public deleteEvent(eventID: string): Observable<CalendarAppEvent[]> {
    // return this.http.delete('api/calendar/events/'+eventID)
    // .map((events: CalendarAppEvent[]) => {
    //   this.events = events;
    //   return events;
    // });

    this.events = this.events.filter(e => e._id !== eventID);
    return of(this.events);
  }

}
