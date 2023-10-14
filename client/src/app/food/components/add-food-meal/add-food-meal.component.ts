import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-food-meal',
  templateUrl: './add-food-meal.component.html',
  styleUrls: ['./add-food-meal.component.scss'],
})
export class AddFoodMealComponent  implements OnInit {
  selectedSegment: "food" | "meal" = "food";
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  /**
   * Toggles segment
   * @param e 
   */
  handleChangeSegment(e: any) {
    this.selectedSegment = e.detail.value;
  }

  /**
   * Dismiss modal
   */
  async cancel(){
    await this.modalController.dismiss();
  }

}
