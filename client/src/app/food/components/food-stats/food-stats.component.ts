import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-food-stats',
  templateUrl: './food-stats.component.html',
  styleUrls: ['./food-stats.component.scss'],
})
export class FoodStatsComponent  implements OnInit {
  title = 'ng2-charts-demo';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [
      'Calories',
      'Protein',
      'Carbs',
      'Fat'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81 ],
        label: "Nutrition"
      }
    ]
  };
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true
  };
  constructor() { }

  ngOnInit() {}

}
