import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayComponent } from './components/calendar/day/day.component';
import { CalendarComponent } from './components/calendar/calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { DayDetailsComponent } from './components/calendar/day-details/day-details.component';
import { HttpClientModule } from '@angular/common/http';
import { EventComponent } from './event/event.component';
import { EventUpsertDialogComponent } from './mat-dialogs/event-upsert-dialog/event-upsert-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDeletionDialogComponent } from './mat-dialogs/confirm-deletion-dialog/confirm-deletion-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    CalendarComponent,
    DayDetailsComponent,
    EventComponent,
    EventUpsertDialogComponent,
    ConfirmDeletionDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
