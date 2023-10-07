import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FoodCardComponent } from './components/food-card/food-card.component';
import { WorkoutCardComponent } from './components/workout-card/workout-card.component';
import { StreakComponent } from './components/streak/streak.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  declarations: [HomePage, FoodCardComponent, WorkoutCardComponent, StreakComponent]
})
export class HomePageModule {}
