import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio2.component.html',
  styleUrl: './inicio2.component.scss'
})
export class Inicio2Component {

  constructor( private router: Router){}

  cards = [
    { title: 'Reporte Docentes', image: 'assets/img/Reporte1.png', route:'carreras' },
    { title: 'Estadísticas', image: 'assets/img/Reporte2.png', route: null },
    { title: 'Reporte Trimestral', image: 'assets/img/Avisos1.png', route: null }
  ];

  navigate(route: string | null): void{
    if (route !==null){
      this.router.navigate([`/${route}`]);
    }
  }
}
