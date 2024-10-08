import { Routes } from '@angular/router'; 
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BodyComponent } from './components/body/body.component';
import { Body2Component } from './components/body2/body2.component';
import { FooterComponent } from './components/footer/footer.component';

import { InicioComponent } from './components/inicio/inicio.component';
import { CrearReporteComponent } from './components/crear-reporte/crear-reporte.component';
import { HistorialComponent } from './components/historial/historial.component';

import { Inicio2Component } from './components/inicio2/inicio2.component';
import { CarrerasComponent } from './components/carreras/carreras.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },  // Redirige a 'inicio'
  { path: 'login', component: LoginComponent },  // Ruta para HeaderComponent
  { path: 'header', component: HeaderComponent },  // Ruta para HeaderComponent
  { path: 'sidenav', component: SidenavComponent },  // Ruta para SidenavComponent  
  { path: 'body', component: BodyComponent },  // Ruta para BodyComponent
  { path: 'body2', component: Body2Component },  // Ruta para Body2Component
  { path: 'footer', component: FooterComponent },  // Ruta para FooterComponent

  { path: 'inicio', component: InicioComponent},  // Ruta para 'Inicio'
  { path: 'crear-reporte', component: CrearReporteComponent },  // Ruta para CrearReporteComponent  
  { path: 'historial', component: HistorialComponent},  // Ruta para HistorialComponent  
  { path: 'inicio2', component: Inicio2Component },  // Ruta para 'Inicio2'
  { path: 'carreras', component: CarrerasComponent },  // Ruta para Carreras
  { path: '**', redirectTo: '' },  // Ruta de fallback para redirigir a la principal
];
