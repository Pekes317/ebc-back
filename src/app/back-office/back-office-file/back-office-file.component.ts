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
    this.getAuth();
  }

  getAuth() {  
    this.http.get('http://admin:yield63EBC**@ebc.beezleeart.com/assets/file/').subscribe(
      data => console.log('Success', data),
      err => console.log('Fail', err)
    )
  }
}
