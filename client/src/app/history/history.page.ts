import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { ChooseExerciseComponent } from '../home/components/choose-exercise/choose-exercise.component';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
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
        tension: 0,
        borderColor: 'black',
        backgroundColor: 'rgb(46, 138, 153)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };

  constructor(
    private outlet: IonRouterOutlet,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async openExerciseModal() {
    const modal = await this.modalController.create({
      component: ChooseExerciseComponent,
      presentingElement: this.outlet.nativeEl,
      cssClass: 'modal-controller'
    });

    await modal.present();
  }

}
