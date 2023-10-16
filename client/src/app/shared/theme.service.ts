import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { StatusBar, Style } from '@capacitor/status-bar';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme: string = "";
  private _themeSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");
  _themeObservable: Observable<string> = this._themeSubject.asObservable();

  constructor() { }

  /**
   * Method that retrieves user's theme pref and applies it on app initialization.
   */
  async applyThemeOnInit(){
    this.theme = (await Preferences.get({key: "theme"})).value ?? "system";
    if(!this.theme || this.theme === "system"){
      this.applyTheme("system")
    }else{
      this.applyTheme(this.theme);
    }
  }

  /**
   * Changes theme
   * @param theme - new theme
   */
  async applyTheme(theme: string){
    switch(theme){
      case "light":
        document.body.setAttribute("color-theme", "light");
        this.setThemeToLocalStorage("light");
        this._themeSubject.next("light");
        await StatusBar.setStyle({
          style: Style.Light
        });
        break;
      case "dark":
        document.body.setAttribute("color-theme", "dark");
        this.setThemeToLocalStorage("dark");
        this._themeSubject.next("dark");
        await StatusBar.setStyle({
          style: Style.Dark
        });
        break;
      case "system":
        // set the theme local storage to whatever the user's system pref theme is
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if(prefersDark){
          this.applyTheme("dark");
        }else{
          this.applyTheme("light")
        }
        break;
    }
  }

  /**
   * get user's theme from local storage
   * @returns theme
   */
  async getTheme(): Promise<string>{
    const theme = await Preferences.get({key: "theme"});
    return theme.value ?? "system";
  }

  /**
   * sets user's theme to local storage
   * @param theme - theme to set
   */
  async setThemeToLocalStorage(theme: string){
    await Preferences.set({
      key: "theme",
      value: theme
    })
  }
}
