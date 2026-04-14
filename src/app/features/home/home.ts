import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutComponent } from '../about/about';
import { ContactComponent } from '../contact/contact';
import { ServicesComponent } from '../services/services';
import { HeroComponent } from '../../layout/hero/hero';
import { MisionVision } from "../mision-vision/mision-vision";

@Component({
  selector: 'app-home',
  imports: [CommonModule, AboutComponent, ContactComponent, ServicesComponent, HeroComponent, MisionVision],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent { }
