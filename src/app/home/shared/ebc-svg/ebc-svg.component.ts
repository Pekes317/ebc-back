import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';

import { NavbarComponent } from '../navbar/navbar.component';
import { BackandItemService } from '../shared/backand-item.service';
import { BackandAuthService } from '../shared/backand-auth.service';
import { BackandSvg } from '../shared/backand-types';

@Component({
  selector: 'app-ebc-svg',
  templateUrl: './ebc-svg.component.html',
  styleUrls: ['./ebc-svg.component.scss']
})
export class EbcSvgComponent implements OnInit {
  ebcCard: BackandSvg;
  navSafe: boolean = false;

  constructor(private auth: BackandAuthService, private backand: BackandItemService, private http: Http,
    private route: ActivatedRoute, private router: Router, private snack: MdSnackBar) { 
      
    }

  ngOnInit() {
   this.getAuth();
  }

  getCard() {
    let cards: Array<BackandSvg>;
    let id = this.getItemId();

    this.backand.getList('svg').then(
      svg => {
        cards = svg['data'];
        this.ebcCard = cards.find(cards => cards.itemID === id);
      });
  }

  getItemId() {
    let itemID;
    
    this.route.params.subscribe(
      param => {
        itemID = +param['id']
      });
      return itemID;
  }

  getAuth() {
    this.auth.useAnoymousAuth();
    this.getCard();
  }

  toLogin() {
    this.router.navigate(['login']);
  }

  navAlert() {
    this.navSafe = true;
    this.snack.open('Access Denied', 'to Login')
    .afterDismissed()
    .subscribe(() => {
      this.toLogin();
    });
  }
}
