import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-streak',
  templateUrl: './streak.component.html',
  styleUrls: ['./streak.component.scss'],
})
export class StreakComponent  implements OnInit {
  numWeeks: number = 0;
  selectedMonth: number = 1; // 1 - 12
  selectedYear: number = 2023;
  remainingDays: number = 0;
  constructor() { }

  ngOnInit() {
    this.calculateNumOfWeeks();
  }

  /**
   * Calculates number of weeks for selected month and year
   */
  calculateNumOfWeeks() {
    let days = this.daysInMonth(this.selectedMonth, this.selectedYear);
    this.numWeeks = Math.floor(days / 7);
    this.remainingDays = days % 7;
    console.log(days/7, this.numWeeks, this.remainingDays);
  }

  /**
   * Calculates days in a month of a year
   * @param month 
   * @param year 
   * @returns 
   */
  daysInMonth (month:number, year:number) {
    return new Date(year, month, 0).getDate();
  }

  /**
   * Updates selected month and selected year and re-calculates weeks and days
   * @param e 
   */
  handleDates(e:any) {
    const {value:date} = e.detail;
    const updatedDate = new Date(date);
    this.selectedMonth = updatedDate.getMonth() + 1;
    this.selectedYear = updatedDate.getFullYear();
    this.calculateNumOfWeeks();
  }

}