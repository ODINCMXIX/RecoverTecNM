import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-inicio2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio2.component.html',
  styleUrl: './inicio2.component.scss'
})
export class Inicio2Component {
  cards = [
    { title: 'Reporte Docentes', image: 'assets/img/Reporte1.png' },
    { title: 'Estadísticas', image: 'assets/img/Reporte2.png' },
    { title: 'Reporte Trimestral', image: 'assets/img/Avisos1.png' }
  ];
}
