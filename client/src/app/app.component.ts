import { Component, OnInit } from '@angular/core';
import { ThemeService } from './shared/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private themeService: ThemeService
  ) {}

  async ngOnInit() {
    this.themeService.applyThemeOnInit();
  }
}
