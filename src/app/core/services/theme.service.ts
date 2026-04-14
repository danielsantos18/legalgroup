import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  setLightTheme() {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  }

  setDarkTheme() {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  }
}
