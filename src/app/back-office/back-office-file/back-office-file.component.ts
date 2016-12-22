import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-back-office-file',
  templateUrl: './back-office-file.component.html',
  styleUrls: ['./back-office-file.component.scss']
})
export class BackOfficeFileComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {

  }
}
