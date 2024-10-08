import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';  // Importa el componente
import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,  // Especifica que el componente es independiente
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidenavComponent, BodyComponent],  // Asegúrate de importar el SidenavComponent aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RecoverTecNM';

  isSideNavCollapsed = false;
  screenWidth = 0;

  // Inyección del Router
  constructor(private router: Router) {}

  onToggleSideNav(data: SideNavToggle): void{
  this.screenWidth = data.screenWidth;
  this.isSideNavCollapsed = data.collapsed;
  }
  isLoginPage(): boolean {
    return this.router.url === '/login'; // Ajusta la URL según tu configuración de rutas
  }
}
