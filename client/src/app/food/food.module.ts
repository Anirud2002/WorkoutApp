import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodPageRoutingModule } from './food-routing.module';

import { FoodPage } from './food.page';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LoggedFoodComponent } from './components/logged-food/logged-food.component';
import { FoodStatsComponent } from './components/food-stats/food-stats.component';
import { NgChartsModule } from 'ng2-charts';
import { AddFoodMealComponent } from './components/add-food-meal/add-food-meal.component';
import { AddFoodComponent } from './components/add-food/add-food.component';
import { AddMealComponent } from './components/add-meal/add-meal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodPageRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    NgChartsModule
  ],
  declarations: [
    FoodPage, 
    LoggedFoodComponent, 
    FoodStatsComponent,
    AddFoodMealComponent,
    AddFoodComponent,
    AddMealComponent
  ]
})
export class FoodPageModule {}
