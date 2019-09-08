import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})
export class TipComponent implements OnInit {

  now:Date;
  firstTipDate: Date;
  secondTipDate: Date;
  
  constructor() { 
    this.firstTipDate = new Date(2019, 8, 8, 18,0,0,0);
    this.secondTipDate = new Date(2019, 8, 9, 18,0,0,0);
    this.now = new Date();
  }

  ngOnInit() {
  }

  beforeFirstTip():boolean {
    return this.now < this.firstTipDate;
  }

  secondTip():boolean {
    return this.now > this.secondTipDate;
  }
}
