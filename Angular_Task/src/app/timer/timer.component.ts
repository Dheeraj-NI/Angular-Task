import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  timerInterval: any; // Variable to store the timer interval
  
  ngOnInit() {
    
    // console.log("One minute has passed."); // Replace this with your desired action or text display
    this.startTimer();
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.displayText();
    }, 1000); // Display text every 1 minute (60,000 milliseconds)
  }


   stopTimer() {
    clearInterval(this.timerInterval); // Stop the timer interval
  }

  displayText() {
    console.log("Two Seconds has passed."); // Replace this with your desired action or text display
  }
}
