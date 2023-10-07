import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FoodCardComponent } from './components/food-card/food-card.component';
import { WorkoutCardComponent } from './components/workout-card/workout-card.component';
import { StreakComponent } from './components/streak/streak.component';
import { StreakPopoverComponent } from './components/streak-popover/streak-popover.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  declarations: [
    HomePage, 
    FoodCardComponent, 
    WorkoutCardComponent, 
    StreakComponent, 
    StreakPopoverComponent, 
    StatisticsComponent
  ],
  providers: [DatePipe]
})
export class HomePageModule {}
