import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout';
import { HomeComponent } from './features/home/home';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // Home en la raíz
      { path: '', component: HomeComponent },

      // Listado de servicios
      {
        path: 'servicios',
        loadComponent: () =>
          import('./features/services/services').then(
            (m) => m.ServicesComponent
          ),
        title: 'Servicios – Legal Group SAS',
      },

      // Detalle de servicio
      {
        path: 'servicios/:id',
        loadComponent: () =>
          import('./features/services/services-detail/services-detail').then(
            (m) => m.ServicesDetailComponent
          ),
        title: 'Detalle de Servicio – Legal Group SAS',
      },
    ],
  },

  // Fallback
  { path: '**', redirectTo: '' },
];
