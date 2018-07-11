import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ebc-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {
  @Input() set counter(amount: number) {
    this.currentCount = amount;
    this.selectState();
  }
  @Output() itemAction: EventEmitter<boolean> = new EventEmitter();
  
  currentCount: number = 0;
  isChecked: boolean = false;
  pluralMap: {[k: string]: string} = {'=0': 'none', '=1': 'item', 'other': 'items'}

  constructor() { }

  ngOnInit() { }

  selectState() {
    this.isChecked = (this.currentCount > 0) ? true : false;
  }

  openAction(del: boolean) {
    this.itemAction.next(del);
  }
}
