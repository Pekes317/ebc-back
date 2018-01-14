import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';

import { NavbarComponent } from '../navbar/navbar.component';
import { BackandItemService } from '../shared/backand-item.service';
import { BackandAuthService } from '../shared/backand-auth.service';
import { BackandItem } from '../shared/backand-types';

@Component({
  selector: 'app-ebc-svg',
  templateUrl: './ebc-svg.component.html',
  styleUrls: ['./ebc-svg.component.scss']
})
export class EbcSvgComponent implements OnInit {
  ebcCard: BackandItem;
  ebcMedia: string; 
  navSafe: boolean = false;

  constructor(private auth: BackandAuthService, private backand: BackandItemService, 
    private route: ActivatedRoute, private router: Router, private snack: MatSnackBar) {

  }

  ngOnInit() {
    this.getAuth();
  }

  getCard() {
    let id = this.getItemId();

    this.backand.getItem('items', id)
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
