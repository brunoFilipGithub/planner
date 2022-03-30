import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Event } from "src/app/event";
import { CustomDate } from '../customDate';
import { ConfirmDeletionDialogComponent } from '../mat-dialogs/confirm-deletion-dialog/confirm-deletion-dialog.component';
import { EventUpsertDialogComponent } from '../mat-dialogs/event-upsert-dialog/event-upsert-dialog.component';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() event : Event;
  eventDate : CustomDate;

  constructor(private dialog : MatDialog, private eventService : EventsService) { 
  }

  ngOnInit(): void {
    var date = new Date(this.event.event_datetime);

    this.eventDate = { Year : date.getFullYear(), Month : date.getMonth(), Day : date.getDate(), Hours : date.getHours(), Minutes : date.getMinutes(), Seconds : date.getSeconds() };

  }

  onDelete() : void {
    const dialogRef = this.dialog.open(ConfirmDeletionDialogComponent);

    dialogRef.afterClosed().subscribe( res => {
      if(res == true){
        this.eventService.deleteEvent(this.event.event_id).subscribe(res => {
          console.log(res);
          location.reload();
        })
      }
    })
  }

  onUpdate() : void {
    const dialogRef = this.dialog.open(EventUpsertDialogComponent, {
      data : {
      }
    });

    dialogRef.afterClosed().subscribe( res => {
      if(res == true){
        this.eventService.updateEvent(this.event).subscribe(res => {
          console.log(res);
          location.reload();
        })
      }
    })

  }
}
