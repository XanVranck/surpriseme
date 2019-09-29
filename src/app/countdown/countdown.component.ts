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

  constructor() {
    this.interval = interval(1000);
    this.thirdTipDate = new Date(2019, 9, 13, 18, 0, 0, 0)
    this.fourthTipDate = new Date(2019, 9, 15, 18, 0, 0, 0)
    this.fifthTipDate = new Date(2019, 9, 18, 9, 0, 0, 0)
    this.sixthTipDate = new Date(2019, 10, 14, 18, 0, 0, 0)
    this.seventhTipDate = new Date(2019, 11, 19, 18, 0, 0, 0)
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