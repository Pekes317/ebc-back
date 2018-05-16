import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-private-policy',
  templateUrl: './private-policy.component.html',
  styleUrls: ['./private-policy.component.scss']
})
export class PrivatePolicyComponent implements OnInit {
  policyData: SafeHtml;

  constructor(private http: Http, private santize: DomSanitizer) { }

  ngOnInit() {
    this.getPolicy();
  }

  getPolicy() {
    this.http.get('../assets/privacypolicy.html').pipe(
      map(res => res.text())).subscribe(
        data => {
          this.policyData = this.santize.bypassSecurityTrustHtml(data);
        });
  }
}
