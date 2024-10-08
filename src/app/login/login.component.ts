import { Component } from '@angular/core';  
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; 

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}

  navigateTo(userType: string): void {
    this.authService.login(userType); // Guarda el rol del usuario

    if (userType === 'docente') {
      this.router.navigate(['/inicio']); // Redirige a la ruta correspondiente para docentes
    } else if (userType === 'coordinador' || userType === 'subdirector') {
      this.router.navigate(['/inicio2']); // Redirige a la ruta correspondiente para coordinadores/subdirector
    }
  }
}
