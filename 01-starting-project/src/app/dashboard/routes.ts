import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TodayComponent } from './today/today.component';

export const DASHBOARD_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard.component').then((mod) => mod.DashboardComponent),
  },
  {
    path: 'today',
    loadComponent: () =>
      import('./today/today.component').then((mod) => mod.TodayComponent),
  },
];
