import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-deletaion-dialog',
  templateUrl: './confirm-deletion-dialog.component.html',
  styleUrls: ['./confirm-deletion-dialog.component.scss']
})
export class ConfirmDeletionDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmDeletionDialogComponent>) { }

  ngOnInit(): void {
  } 

  onDecline() : void {
    this.dialogRef.close(false); 
  }

  onAccept() : void {
    this.dialogRef.close(true); 
  }
}
