import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  constructor(private themeService: ThemeService) { }

  protected readonly title = signal('legalgroup');

  ngOnInit(): void {
    this.themeService.setLightTheme();
  }
}
