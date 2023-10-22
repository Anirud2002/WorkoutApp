import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-choose-exercise',
  templateUrl: './choose-exercise.component.html',
  styleUrls: ['./choose-exercise.component.scss'],
})
export class ChooseExerciseComponent  implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  // dismiss the modal
  async cancel() {
    await this.modalController.dismiss();
  }

}
