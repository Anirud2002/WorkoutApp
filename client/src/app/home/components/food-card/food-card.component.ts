import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../shared/theme.service';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss'],
})
export class FoodCardComponent  implements OnInit {
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
