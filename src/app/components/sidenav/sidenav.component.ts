import { Component, Output, EventEmitter, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { RouterModule } from '@angular/router';  
import { docenteNavData, coordinadorNavData } from './nav-data'; // Importa los datos del menú
import { AuthService } from '../../services/auth.service'; // Importa el servicio de autenticación

@Component({
  selector: 'app-sidenav',
  standalone: true,  
  imports: [CommonModule, RouterModule],  
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Output() onToggleSideNav: EventEmitter<any> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData: any[] = []; // Variable para almacenar el conjunto de datos del menú

  constructor(private authService: AuthService) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.screenWidth = window.innerWidth;
    }
    // Verifica el rol del usuario y carga el menú correspondiente
    const role = this.authService.getUserRole();
    if (role === 'docente') {
      this.navData = docenteNavData;
    } else if (role === 'coordinador' || role === 'subdirector') {
      this.navData = coordinadorNavData;
    }
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }
}
