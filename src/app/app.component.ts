import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  now: Date;
  firstEndDate: Date;
  firstTipDate: Date;
  secondEndDate: Date;

  ngOnInit(): void {
    this.now = new Date();
    // Counter will coutn till 23 august 13:20
    this.firstEndDate = new Date(2019, 7, 23, 13, 20, 0, 0);
    // from 13:20 toll 13:25 there will be a tip
    this.firstTipDate = new Date(2019, 7, 23, 13, 25, 0, 0);
    // from 13:25 till 13:30 there is a new counter
    this.secondEndDate = new Date(2019, 7, 24, 13, 30, 0, 0);
  }

  isBeforeFirstDate(): boolean {
    return this.now < this.firstEndDate;
  }

  isBeforeSecondDateStart(): boolean {
    return this.now > this.firstEndDate && this.now < this.firstTipDate;
  }

  isBeforeSecondDate(): boolean {
    return this.now < this.secondEndDate && this.now > this.firstTipDate;
  }
}
