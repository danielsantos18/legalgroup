import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar';
import { Footercomponent } from './footer/footer';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, NavbarComponent, Footercomponent],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class LayoutComponent { }
