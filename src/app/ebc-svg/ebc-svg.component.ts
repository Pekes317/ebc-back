import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, Meta, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subscription } from 'rxjs';

import { NavbarComponent } from '../navbar/navbar.component';
import { BackandItemService } from '../shared/backand-item.service';
import { BackandAuthService } from '../shared/backand-auth.service';
import { BackandItem, MediaContent } from '../shared/backand-types';

@Component({
  selector: 'app-ebc-svg',
  templateUrl: './ebc-svg.component.html',
  styleUrls: ['./ebc-svg.component.scss']
})
export class EbcSvgComponent implements OnInit {
  auth: boolean = this.fireAuth.auth.currentUser ? true : false;
  ebcCard: BackandItem;
  ebcMedia: SafeResourceUrl;
  navSafe: boolean;

  constructor(private backand: BackandItemService, private route: ActivatedRoute, private fireAuth: AngularFireAuth,
   private meta: Meta, private router: Router, private sanitizer: DomSanitizer, private snack: MatSnackBar) { }

  ngOnInit() {
    this.getCard();
  }

  getCard() {
    let id = this.getItemId();

    this.backand.getItem('shared', id)
      .subscribe((item: BackandItem) => {
        this.ebcCard = item;
        this.meta.updateTag({ property: 'og:image',  content: item.pic });
        this.meta.updateTag({ property: 'og:title',  content: `EBC: ${item.name}` });
        this.meta.updateTag({ property: 'og:description',  content: item.desc });
        this.backand.getMedia(item.media).subscribe(
          (data: MediaContent) => this.ebcMedia = this.sanitizer.bypassSecurityTrustHtml(data.media),
          err => console.log(err)
        );
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

  toLogin() {
    this.router.navigate(['login']);
  }

  navAlert() {
    this.snack.open('Access Denied', 'to Login', { duration: 3000 })
      .afterDismissed()
      .subscribe(() => {
        this.toLogin();
      });
  }
}
