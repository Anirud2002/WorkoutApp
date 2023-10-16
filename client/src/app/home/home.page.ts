import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  selectedTheme: string = "system";
  constructor(
    private themeService: ThemeService
  ) {}

  async ngOnInit() {
    this.selectedTheme = await this.themeService.getTheme(); 
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
  
  /**
   * Toggles theme between light and dark
   */
  async toggleTheme() {
    this.selectedTheme = this.selectedTheme === "light" ? "dark" : "light";
    await this.themeService.applyTheme(this.selectedTheme);
  }
}
