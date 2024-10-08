import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Asegúrate de importar tu servicio de autenticación

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      const userRole = this.authService.getUserRole();
      
      // Permite el acceso basado en el rol, redirigiendo según el rol del usuario
      if (userRole === 'docente') {
        this.router.navigate(['/inicio']); // Redirige a inicio para docentes
        return true; 
      } else if (userRole === 'coordinador' || userRole === 'subdireccion') {
        this.router.navigate(['/inicio2']); // Redirige a inicio2 para coordinadores y subdirección
        return true; 
      }
    }
    
    this.router.navigate(['/login']); // Redirige a la página de login si no está autenticado
    return false;
  }
}
