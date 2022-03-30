import { Component, OnInit } from '@angular/core';
import { Months } from 'src/app/months';
import { Weekdays } from 'src/app/weekdays';
import { Event } from 'src/app/event';
import { EventsService } from 'src/app/services/events.service';
import { CustomDate } from 'src/app/customDate';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  
  thisMonthsEvents : Event[];

  currentDate : Date = new Date(); 
  currentYear : number;
  currentMonth : string;
  weekdays : string[];

  lastDayOfThisMonth : number;
  firstDayOfThisMonth : number;
  lastDayOfLastMonth : number;
  firstDayOfNextMonth : number;


  currentDays : number[] = [];
  prevDays : number[] = [];
  nextDays : number[] = [];

  displayDay : boolean;
  selectedDate : Date | null;

  constructor(private eventsService : EventsService) {
   }


  ngOnInit(): void {
    this.eventsService.getEventsByMonth(new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, this.currentDate.getDate())).subscribe( res => {
      this.thisMonthsEvents = res;
      console.log(this.thisMonthsEvents);
    })

    this.currentYear = this.currentDate.getFullYear();
    this.currentMonth = Months[this.currentDate.getMonth()];
    this.weekdays = Weekdays;
    this.firstDayOfThisMonth =  new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1).getDate();
    this.lastDayOfThisMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth()+1, 0).getDate();
    
    this.lastDayOfLastMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 0).getDate();
    this.firstDayOfNextMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1).getDate();

    this.currentDays  = [];
    this.prevDays = [];
    this.nextDays = [];

    

    this.initDays();
    this.initPrevDays();
    this.initNextDays();
  }

  dayContainsEvents(day : number) : boolean {
    for(let i = 0; i < this.thisMonthsEvents.length; i++)
    {
      var a = new Date(this.thisMonthsEvents[i].event_datetime);
      
      if(a.getDate() == day)
      {
        return true;
      }
    }

    return false;
  }

  /*dateTimeToCustomDate() : CustomDate {
    var result : CustomDate = {}

  }*/

  initDays() : void {
    for(let i = 0; i < this.lastDayOfThisMonth; i++)
    {
      this.currentDays.push(i + 1);
    }
  }

  initPrevDays() : void {
    let dayIndex = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1).getDay();
    let temp = this.lastDayOfLastMonth;

    for(let a = 0; a < dayIndex; a++)
    {
      this.prevDays.push(temp);
      temp--;
    }

    this.prevDays.reverse();
  }

  initNextDays() : void {
    let dayIndex = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDay();
    let temp = 1;

    if(this.currentDays.length + this.prevDays.length < 36)
    {
      for(let a = dayIndex; a < 6+7; a++)
      {
        this.nextDays.push(temp);
        temp++;
      }
    }
    else 
    {
      for(let a = dayIndex; a < 6; a++)
      {
        this.nextDays.push(temp);
        temp++;
      }
    }
  }

  nextMonth() : void {

    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);

    this.ngOnInit();
  }

  prevMonth() : void {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);

    this.ngOnInit();
  }

  onCloseDayDetails(event : any) : void {
    this.selectedDate = null;
  }

  onDaySelected(event : any) : void {
    this.selectedDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, event);


    console.log(this.selectedDate.toLocaleDateString());
    console.log(this.selectedDate.getMonth());
  }

  eventsByDate(date : Date) : Event[]{
   var dayEvents : Event[] = [];
   
   for(let i = 0; i < this.thisMonthsEvents.length ; i++)
   {
     var eventDate = new Date(this.thisMonthsEvents[i].event_datetime);
     if(eventDate.getDate() == date.getDate())
     {
       dayEvents.push(this.thisMonthsEvents[i]);
     }
   }

   return dayEvents;
  }

  /*dateToCustomDate(date : Date) : CustomDate {
   var customDate : CustomDate = { Year = date.getFullYear(), Month = date.getMonth(), Day = date.getDate(), Hours = date.getHours(), Minutes = date.getMinutes(), Seconds = date.getSeconds() };
    return customDate;
  }
*/
}