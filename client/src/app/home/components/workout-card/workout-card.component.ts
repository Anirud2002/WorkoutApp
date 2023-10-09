import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AddSetPopoverComponent } from '../add-set-popover/add-set-popover.component';

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.scss'],
})
export class WorkoutCardComponent  implements OnInit {
  selectedSet: any; //FIX ME
  constructor(
    private popoverController: PopoverController
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
      // side: 'bottom',
      // alignment: 'center',
      // arrow: true
    });
    await popover.present();
  }

}
