import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  

  constructor(private dialog : MatDialog, private eventsService : EventsService) { }

  @Input() day : number;
  @Input() isCurrentMonthDay : boolean;
  @Input() containsEvents : boolean;
  @Output() monthDay = new EventEmitter<number>();

  ngOnInit(): void {

  }

  onDaySelect() : void {
    this.monthDay.emit(this.day);
  }

}
