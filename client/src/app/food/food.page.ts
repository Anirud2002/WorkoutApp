import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {
  selectedTheme: string = "system";
  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    this.subscribeToTheme();
  }

  /**
   * Subscribe to theme to change the color for prgress texts
   */
  subscribeToTheme() {
    this.themeService._themeObservable.subscribe(theme => {
      this.selectedTheme = theme;
    })
  }

}
