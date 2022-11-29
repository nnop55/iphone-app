import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-battery-modal',
  templateUrl: './battery-modal.component.html',
  styleUrls: ['./battery-modal.component.css']
})
export class BatteryModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BatteryModalComponent>) { }

  ngOnInit(): void {
  }

}
