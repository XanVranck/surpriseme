import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})
export class TipComponent implements OnInit {

  now:Date;
  firstTipDate: Date;
  
  constructor() { 
    this.firstTipDate = new Date(2019, 8, 8, 18,0,0,0);
    this.now = new Date();
    console.log('now', this.now);
    console.log('firstTip', this.firstTipDate);
  }

  ngOnInit() {
  }

  beforeFirstTip():boolean {
    return this.now < this.firstTipDate;
  }
}
