import { Routes } from '@angular/router'; 
import { Body2Component } from './components/body2/body2.component';
import { CrearReporteComponent } from './components/crear-reporte/crear-reporte.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HistorialComponent } from './components/historial/historial.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { InicioComponent } from './components/inicio/inicio.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },  // Redirige a 'inicio'
  { path: 'inicio', component: InicioComponent },  // Ruta para 'Inicio'
  { path: 'body2', component: Body2Component },  // Ruta para Body2Component
  { path: 'crear-reporte', component: CrearReporteComponent },  // Ruta para CrearReporteComponent
  { path: 'footer', component: FooterComponent },  // Ruta para FooterComponent
  { path: 'header', component: HeaderComponent },  // Ruta para HeaderComponent
  { path: 'historial', component: HistorialComponent },  // Ruta para HistorialComponent
  { path: 'sidenav', component: SidenavComponent },  // Ruta para SidenavComponent
  { path: '**', redirectTo: '' }  // Ruta de fallback para redirigir a la principal
];
