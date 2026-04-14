import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LegalServiceModel } from '../models/legal-service.model';

@Injectable({
  providedIn: 'root',
})
export class LegalService {


  getServices(): Observable<LegalServiceModel[]> {
    return of([
      {
        title: 'Derecho Penal',
        description: 'Defensa jurídica especializada en procesos penales'
      },
      {
        title: 'Derecho Civil',
        description: 'Asesoría en contratos, bienes y responsabilidad civil'
      },
      {
        title: 'Derecho Laboral',
        description: 'Defensa de derechos laborales y empresariales'
      }
    ]);
  }
}
