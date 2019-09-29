import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})
export class TipComponent implements OnInit {

  now: Date;
  firstTipDate: Date;
  secondTipDate: Date;
  thirdTipDate: Date;
  fourthTipDate: Date;
  fifthTipDate: Date;
  sixthTipDate: Date;
  seventhTipDate: Date;
  eigthTipDate: Date;
  ninethTipDate: Date;
  tenthTipDate: Date;
  eleventhTipDate: Date;
  twelvethTipDate: Date;
  thirteenthTipDate: Date;
  fourteenthTipDate: Date;
  fifteenthTipDate: Date;

  constructor() {
    this.firstTipDate = new Date(2019, 8, 8, 18, 0, 0, 0);
    this.secondTipDate = new Date(2019, 8, 9, 18, 0, 0, 0);
    this.thirdTipDate = new Date(2019, 9, 13, 18, 0, 0, 0)
    this.fourthTipDate = new Date(2019, 9, 15, 18, 0, 0, 0)
    this.fifthTipDate = new Date(2019, 9, 18, 9, 0, 0, 0)
    this.sixthTipDate = new Date(2019, 10, 14, 18, 0, 0, 0)
    this.seventhTipDate = new Date(2019, 11, 19, 18, 0, 0, 0)
    this.eigthTipDate = new Date(2020, 0, 1, 18, 0, 0, 0)
    this.ninethTipDate = new Date(2020, 1, 27, 18, 0, 0, 0)
    this.tenthTipDate = new Date(2020, 2, 13, 18, 0, 0, 0)
    this.eleventhTipDate = new Date(2020, 3, 27, 18, 0, 0, 0)
    this.twelvethTipDate = new Date(2020, 3, 28, 18, 0, 0, 0)
    this.thirteenthTipDate = new Date(2020, 3, 29, 18, 0, 0, 0)
    this.fourteenthTipDate = new Date(2020, 4, 1, 18, 0, 0, 0)
    this.fifteenthTipDate = new Date(2020, 6, 18, 18, 0, 0, 0)
    this.now = new Date();
  }

  ngOnInit() {
  }

  beforeFirstTip(): boolean {
    return this.now < this.firstTipDate;
  }

  secondTip(): boolean {
    return this.now > this.secondTipDate;
  }

  thirdTip(): boolean {
    return this.now > this.thirdTipDate;
  }

  fourthTip(): boolean {
    return this.now > this.fourthTipDate;
  }

  fifthTip(): boolean {
    return this.now > this.fifthTipDate;
  }

  sixthTip(): boolean {
    return this.now > this.sixthTipDate;
  }

  seventhTip(): boolean {
    return this.now > this.seventhTipDate;
  }

  eigthTip(): boolean {
    return this.now > this.eigthTipDate;
  }

  ninethTip(): boolean {
    return this.now > this.ninethTipDate;
  }

  tenthTip(): boolean {
    return this.now > this.tenthTipDate;
  }

  eleventhTip(): boolean {
    return this.now > this.eleventhTipDate;
  }

  twelvethTip(): boolean {
    return this.now > this.twelvethTipDate;
  }

  thirteenthTip(): boolean {
    return this.now > this.thirteenthTipDate;
  }

  fourteenthTip(): boolean {
    return this.now > this.fourteenthTipDate;
  }

  fifteenthTip(): boolean {
    return this.now > this.fifteenthTipDate;
  }
}
