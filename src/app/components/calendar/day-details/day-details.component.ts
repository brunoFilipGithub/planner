import { Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { Event } from 'src/app/event';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EventUpsertDialogComponent } from 'src/app/mat-dialogs/event-upsert-dialog/event-upsert-dialog.component';

@Component({
  selector: 'app-day-details',
  templateUrl: './day-details.component.html',
  styleUrls: ['./day-details.component.scss']
})
export class DayDetailsComponent implements OnInit {

  @Input() date : Date;
  @Input() events : Event[];
  @Output() closeDayDetails: EventEmitter<any> = new EventEmitter();


  constructor( private dialog : MatDialog) { }

  ngOnInit(): void {

  }

  close() {
    this.closeDayDetails.emit(null);
  }

  onAddEvent() : void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };
    this.dialog.open(EventUpsertDialogComponent, dialogConfig);
  }
}
 