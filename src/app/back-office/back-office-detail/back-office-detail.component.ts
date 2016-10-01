import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-back-office-detail',
  templateUrl: './back-office-detail.component.html',
  styleUrls: ['./back-office-detail.component.scss']
})
export class BackOfficeDetailComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<BackOfficeDetailComponent>) { }

  ngOnInit() {
  }

}
