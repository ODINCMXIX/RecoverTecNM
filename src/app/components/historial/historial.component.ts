import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Reporte {
  nombre: string;
  usuario: string;
  fecha: string;
}

interface Mes {
  nombreMes: string;
  reportes: Reporte[];
}

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.scss'
})
export class HistorialComponent {
  historialPorMes: Mes[] = [
    {
      nombreMes: 'Octubre 2024',
      reportes: [
        { nombre: 'Reporte Bimestral', usuario: 'Mtro. Luis Miranda', fecha: '02/10/2024' },
        { nombre: 'Reporte de Actividades', usuario: 'Mtra. Carla Gómez', fecha: '05/10/2024' }
      ]
    },
    {
      nombreMes: 'Septiembre 2024',
      reportes: [
        { nombre: 'Reporte Bimestral', usuario: 'Mtro. José Pérez', fecha: '15/09/2024' }
      ]
    }
  ];
}
