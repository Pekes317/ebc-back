import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Component({
  selector: 'app-back-office-file',
  templateUrl: './back-office-file.component.html',
  styleUrls: ['./back-office-file.component.scss']
})
export class BackOfficeFileComponent implements OnInit {
  ebcItems: Array<any>;
  db: string = 'http://ebc.beezleeart.com/assets/ebc-db/';

  constructor(private http: Http) { }

  ngOnInit() {
    this.getFile();
  }

  getFile() {
    this.http.get(this.db).map(res => res.json())
      .subscribe(
      data => {
        console.log(data);
        this.ebcItems = data;
      })
  }

  postFile() {
    let o = {
      id: 1
    };

    this.http.post(this.db, JSON.stringify(o)).map(res => res.json())
      .subscribe(
      data => {
        console.log(data);
      })
  }
}
