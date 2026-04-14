import { Component } from '@angular/core';
import { Service, SERVICES } from '../../core/models/services.data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class ServicesComponent {
   services: Service[] = SERVICES;
}
