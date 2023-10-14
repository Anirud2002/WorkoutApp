import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { AddFoodMealComponent } from '../add-food-meal/add-food-meal.component';

@Component({
  selector: 'app-logged-food',
  templateUrl: './logged-food.component.html',
  styleUrls: ['./logged-food.component.scss'],
})
export class LoggedFoodComponent  implements OnInit {

  constructor(
    private modalController: ModalController,
    private outlet: IonRouterOutlet
  ) { }

  ngOnInit() {}

  async openModal() {
    const modal = await this.modalController.create({
      component: AddFoodMealComponent,
      presentingElement: this.outlet.nativeEl,
      cssClass: 'modal-controller'
    });

    await modal.present();
  }

}
