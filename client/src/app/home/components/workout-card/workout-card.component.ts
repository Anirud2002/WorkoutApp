import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController, PopoverController } from '@ionic/angular';
import { AddSetPopoverComponent } from '../add-set-popover/add-set-popover.component';
import { ChooseExerciseComponent } from '../choose-exercise/choose-exercise.component';

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.scss'],
})
export class WorkoutCardComponent  implements OnInit {
  selectedSet: any; //FIX ME
  constructor(
    private outlet: IonRouterOutlet,
    private popoverController: PopoverController,
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  async openAddSetPopover() {
    const popover = await this.popoverController.create({
      component: AddSetPopoverComponent,
      componentProps: {
        set: this.selectedSet
      },
      mode: 'ios',
      showBackdrop: true,
    });
    await popover.present();
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
