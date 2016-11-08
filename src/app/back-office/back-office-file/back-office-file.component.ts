import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { BackandItemService } from '../../shared/backand-item.service';

@Component({
  selector: 'app-back-office-file',
  templateUrl: './back-office-file.component.html',
  styleUrls: ['./back-office-file.component.scss']
})
export class BackOfficeFileComponent implements OnInit {
  ebcItems: Array<any>;

  constructor(private back: BackandItemService, private http: Http) { }

  ngOnInit() {
    this.getFile();
  }

  getFile() {
   
  }

  postFile() {
    
  
  }
}
