import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ebc-crumb',
  templateUrl: './crumb.component.html',
  styleUrls: ['./crumb.component.scss']
})
export class CrumbComponent implements OnInit {
  @Input() ebcTitle: string;

  constructor() { }

  ngOnInit() { }

}
