import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-event-upsert-dialog',
  templateUrl: './event-upsert-dialog.component.html',
  styleUrls: ['./event-upsert-dialog.component.scss']
})
export class EventUpsertDialogComponent implements OnInit {

    form: FormGroup;
    description:string;
    time : string;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<EventUpsertDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data : any) {

        this.description = data.description;
    }

    ngOnInit() {
        this.form = this.fb.group({
            description: [this.description, []],
            time: [this.time, []]
        });
    }

    save() {
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }
}
