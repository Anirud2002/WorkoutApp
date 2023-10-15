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
    console.log(this.selectedTheme);
  }
  
  async toggleTheme() {
    this.selectedTheme = this.selectedTheme === "light" ? "dark" : "light";
    await this.themeService.applyTheme(this.selectedTheme);
  }
}
