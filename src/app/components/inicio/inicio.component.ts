import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router'; // Importa el Router
import { CommonModule } from '@angular/common'; // Importa CommonModule

interface Report {
  name: string;
  user: string;
  date: string;
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule], // Asegúrate de incluir CommonModule aquí
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'] // Corrige a styleUrls
})
export class InicioComponent implements OnInit {
  recentReports: Report[] = []; // Array para los reportes recientes

  constructor(private router: Router) {} // Inyecta el Router

  ngOnInit(): void {
    // Aquí puedes cargar los reportes recientes
    // Ejemplo de carga de reportes recientes
    this.recentReports = [
      { name: 'Reporte Bimestral', user: 'Mtro. Luis Miranda', date: '2024-10-01' },
      { name: 'Reporte Trimestral', user: 'Mtra. Ana Torres', date: '2024-09-15' }
    ];
  }

  // Método para redirigir a la vista de creación de reportes
  redirectToCreateReport(): void {
    console.log('Redirigiendo a crear reporte...');
    this.router.navigate(['/crear-reporte']); // Redirige a la ruta de creación de reportes
  }

  // Método para editar un reporte
  editReport(report: Report): void {
    console.log(`Editando el reporte: ${report.name}`);
    // Aquí puedes implementar la lógica para editar el reporte
  }

  // Método para eliminar un reporte
  deleteReport(report: Report): void {
    console.log(`Eliminando el reporte: ${report.name}`);
    // Aquí puedes implementar la lógica para eliminar el reporte
    // Filtrar el array recentReports para eliminar el reporte
    this.recentReports = this.recentReports.filter(r => r !== report);
  }
}
