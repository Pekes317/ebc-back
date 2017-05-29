import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ebc-reset',
  templateUrl: './ebc-reset.component.html',
  styleUrls: ['./ebc-reset.component.scss']
})
export class EbcResetComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  toHome() {
    this.router.navigate(['']);
  }
}
