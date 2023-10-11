import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-workout-chart',
  templateUrl: './workout-chart.component.html',
  styleUrls: ['./workout-chart.component.scss'],
})
export class WorkoutChartComponent  implements OnInit {
  title = 'ng2-charts-demo';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40, 65, 78, 12, 34, 67 ],
        fill: true,
        tension: 1,
        borderColor: 'black',
        backgroundColor: 'rgb(46, 138, 153)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };

  constructor() { }

  ngOnInit() {}

}
