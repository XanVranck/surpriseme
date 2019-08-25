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

  constructor() {
    
    this.interval = interval(1000);
    setInterval(() => {this.countdown()}, 1000)
  }

  countdown() {
    var countDownDate = new Date(2019, 9, 8, 18,0,0,0).getTime();
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }
}