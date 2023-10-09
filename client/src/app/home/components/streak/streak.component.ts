import { Component, OnInit } from '@angular/core';
import { Cube } from './cube.interface';
import { DatePipe } from '@angular/common';
import { PopoverController } from '@ionic/angular';
import { StreakPopoverComponent } from '../streak-popover/streak-popover.component';

@Component({
  selector: 'app-streak',
  templateUrl: './streak.component.html',
  styleUrls: ['./streak.component.scss'],
})
export class StreakComponent  implements OnInit {
  cubes: Cube[][] = [];
  numWeeks: number = 0;
  selectedMonth: number = 1; // 1 (Jan) - 12 (Dec)
  selectedYear: number = 2023;
  remainingDays: number = 0;

  constructor(
    private datePipe: DatePipe,
    private popoverController: PopoverController  
  ) { }

  ngOnInit() {
    const date = new Date();
    this.selectedMonth = date.getMonth() + 1;
    this.selectedYear = date.getFullYear();
    this.calculateNumOfWeeks();
    this.initializeCubes();
  }

  /**
   * Calculates number of weeks for selected month and year
   */
   calculateNumOfWeeks() {
    let days = this.daysInMonth(this.selectedMonth, this.selectedYear);
    this.numWeeks = Math.floor(days / 7);
    this.remainingDays = days % 7;
  }

  /**
   * Initializes the Cubes array with Cube property
   */
  initializeCubes() {
    this.cubes = [];
    let dayNumber: number = 1;
    let date;
    for(let i = 0; i < this.numWeeks; i++) {
      this.cubes[i] = [];
      for(let j = 0; j < 7; j++) {
        date = new Date(this.selectedYear, this.selectedMonth - 1, dayNumber);
        this.cubes[i][j] = {
          title: this.datePipe.transform(date, 'MMM d, y') ?? '',
          isActive: (i + j) % 3 === 0 // FIX ME
        }
        dayNumber++;
      }
    }
    
    // for remaining days
    let lastIdx = this.cubes.length;
    this.cubes[lastIdx] = [];
    
    for(let i = 0; i < this.remainingDays; i++) {
      date = new Date(this.selectedYear, this.selectedMonth - 1, dayNumber);
      this.cubes[lastIdx][i] = {
        title: this.datePipe.transform(date, 'MMM d, y') ?? '',
        isActive: false
      }
      dayNumber++;
    }
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
   * @param e - event from the IonDateTime
   */
  handleDates(e:any) {
    const {value:date} = e.detail;
    const updatedDate = new Date(date);

    this.selectedMonth = updatedDate.getMonth() + 1;
    this.selectedYear = updatedDate.getFullYear();
    this.calculateNumOfWeeks();
    this.initializeCubes();
  }

  /**
   * Presents a popover that shows cube details
   * @param cube 
   * @param e 
   */
  async showCubeDetails(cube: Cube, e:any) {
    const popover = await this.popoverController.create({
      component: StreakPopoverComponent,
      componentProps: {
        cube
      },
      event: e,
      showBackdrop: false,
      mode: 'ios',
      side: 'bottom',
      alignment: 'center',
      arrow: true
    });
    await popover.present();
  }

}