import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from 'src/app/event';
import { HttpClient } from '@angular/common/http'
import { CustomDate } from '../customDate';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  apiUrl : string = "http://localhost:5093"

  constructor(private httpClient : HttpClient ) { }

  getEvents() : Observable<Event[]> {
    return this.httpClient.get<Event[]>(this.apiUrl + "/events");
  }

  getEventsByMonth(date : Date) : Observable<Event[]> 
  {
    var customDate : CustomDate = { Year: date.getFullYear(), Month: date.getMonth(), Day: date.getDate(), Hours: 0, Minutes: 0, Seconds: 0 };

    return this.httpClient.post<Event[]>(this.apiUrl + "/eventsByMonth", customDate);
  }

  getEventsByDay(date : Date) : Observable<Event[]> 
  {
    var customDate : CustomDate = { Year: date.getFullYear(), Month: date.getMonth(), Day: date.getDate(), Hours: 0, Minutes: 0, Seconds: 0 };

    console.log(customDate)
    return this.httpClient.post<Event[]>(this.apiUrl + "/eventsByDate",  customDate);
  }

  deleteEvent(id : number) : Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/events/${id}`);
  }

  updateEvent(event : Event) : Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/events/`, event);
  }
}

