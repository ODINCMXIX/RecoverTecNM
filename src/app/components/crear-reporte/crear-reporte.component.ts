import { Component } from '@angular/core';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-crear-reporte',
  standalone: true,
  imports: [],
  templateUrl: './crear-reporte.component.html',
  styleUrl: './crear-reporte.component.scss'
})
export class CrearReporteComponent {
  constructor(private router: Router) {}

  navigateTo(reportType: string) {
    if (reportType === 'formato1') {
      this.router.navigate(['/formato1']);
    } else if (reportType === 'formato2') {
      this.router.navigate(['/formato2']);
    }
  }
}
