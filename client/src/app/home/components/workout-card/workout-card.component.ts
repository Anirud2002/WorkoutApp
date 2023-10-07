import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.scss'],
})
export class WorkoutCardComponent  implements OnInit {
  weeks: number = 52;
  daysInWeek: number = 7;
  weeksArray: number[] = Array(this.weeks).fill(0);
  daysArray: number[] = Array(this.daysInWeek).fill(0);
  constructor() { }

  ngOnInit() {}

}
