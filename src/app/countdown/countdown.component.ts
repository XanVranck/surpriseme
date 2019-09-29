import { Component, Input, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})

export class CountdownComponent {
  days: any;
  hours: any;
  minutes: any;
  seconds: any;
  interval: any;
  now: Date;
  countdownDate: Date;
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
    this.interval = interval(1000);
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
    setInterval(() => {this.countdown()}, 1000)
  }

  countdown() {
    this.countdownDate = this.thirdTipDate;
    this.now = new Date();
    if(this.now > this.thirdTipDate && this.now < this.fourthTipDate) {
      this.countdownDate = this.fourthTipDate
    }
    if(this.now > this.fourthTipDate && this.now < this.fifthTipDate) {
      this.countdownDate = this.fifthTipDate
    }
    if(this.now > this.fifthTipDate && this.now < this.sixthTipDate) {
      this.countdownDate = this.sixthTipDate
    }
    if(this.now > this.sixthTipDate && this.now < this.seventhTipDate) {
      this.countdownDate = this.seventhTipDate
    }
    if(this.now > this.seventhTipDate && this.now < this.eigthTipDate) {
      this.countdownDate = this.eigthTipDate
    }
    if(this.now > this.eigthTipDate && this.now < this.ninethTipDate) {
      this.countdownDate = this.ninethTipDate
    }
    if(this.now > this.ninethTipDate && this.now < this.tenthTipDate) {
      this.countdownDate = this.tenthTipDate
    }
    if(this.now > this.tenthTipDate && this.now < this.eleventhTipDate) {
      this.countdownDate = this.eleventhTipDate
    }
    if(this.now > this.eleventhTipDate && this.now < this.twelvethTipDate) {
      this.countdownDate = this.twelvethTipDate
    }
    if(this.now > this.twelvethTipDate && this.now < this.thirteenthTipDate) {
      this.countdownDate = this.thirteenthTipDate
    }
    if(this.now > this.thirteenthTipDate && this.now < this.fourteenthTipDate) {
      this.countdownDate = this.fourteenthTipDate
    }
    if(this.now > this.fourteenthTipDate && this.now < this.fifteenthTipDate) {
      this.countdownDate = this.fifteenthTipDate
    }

    // Find the distance between now and the count down date
    var distance = this.countdownDate.getTime() - this.now.getTime();
    // Time calculations for days, hours, minutes and seconds
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }
}