import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent  implements OnInit {
  selectedStatsType: string = "streak";
  constructor() { }

  ngOnInit() {}

  handleChangeStatisticsType(e: any) {
    const {value: type} = e.detail;

    this.selectedStatsType = type;
  }

}

