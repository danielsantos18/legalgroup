import { Component, OnInit } from '@angular/core';
import { Service, SERVICES } from '../../../core/models/services.data';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './services-detail.html',
  styleUrl: './services-detail.scss',
})
export class ServicesDetailComponent implements OnInit {

  service!: Service;
  notFound = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const found = SERVICES.find((s) => s.id === id);
    if (found) {
      this.service = found;
    } else {
      this.notFound = true;
    }
  }

}
