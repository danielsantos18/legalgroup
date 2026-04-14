import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mision-vision',
  imports: [CommonModule],
  templateUrl: './mision-vision.html',
  styleUrl: './mision-vision.scss',
})
export class MisionVision {
  valores = [
    { titulo: 'Integridad', descripcion: 'Actuamos con transparencia y honestidad en cada actuación jurídica.' },
    { titulo: 'Excelencia', descripcion: 'Elevamos constantemente nuestros estándares de calidad profesional.' },
    { titulo: 'Confidencialidad', descripcion: 'Protegemos la información de nuestros clientes con absoluta reserva.' },
    { titulo: 'Compromiso', descripcion: 'Cada caso es tratado con dedicación plena y vocación de servicio.' },
    { titulo: 'Innovación', descripcion: 'Adoptamos nuevas herramientas jurídicas para mejores resultados.' },
    { titulo: 'Responsabilidad', descripcion: 'Respondemos con rigor y diligencia ante cada encargo legal.' },
  ];
}
