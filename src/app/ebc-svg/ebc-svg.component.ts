import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
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
  ebcSVG: SafeResourceUrl;

  constructor(private auth: BackandAuthService, private backand: BackandItemService,
    private route: ActivatedRoute, private router: Router,
    private sanitize: DomSanitizer) { 
      
    }

  ngOnInit() {
   this.getAuth();
  }

  getCard() {
    let cards: Array<BackandSvg>;
    let id = this.getItemId();

    this.backand.getList('svg').subscribe(
      svg => {
        cards = svg['data'];
        this.ebcCard = cards.find(cards => cards.itemID === id);
        this.ebcSVG = this.sanitize.bypassSecurityTrustResourceUrl(this.ebcCard.path);
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

  toHome() {
    this.router.navigate(['']);
  }
}
