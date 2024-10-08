import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Asegúrate de importar tu servicio de autenticación

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole = route.data['role']; // El rol esperado se debe definir en las rutas
    const currentRole = this.authService.getUserRole(); // Asegúrate de que este método exista en tu servicio

    if (currentRole !== expectedRole) {
      this.router.navigate(['/unauthorized']); // Redirige si el rol no coincide
      return false;
    }
    return true; // Permite el acceso si el rol coincide
  }
}
