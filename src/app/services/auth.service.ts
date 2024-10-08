import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;
  private role: string = '';

  // Método para simular el inicio de sesión
  login(role: string): void {
    this.loggedIn = true;
    this.role = role; // Establecer el rol del usuario
  }

  // Método para simular el cierre de sesión
  logout(): void {
    this.loggedIn = false;
    this.role = '';
  }

  // Método para verificar si el usuario está autenticado
  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  // Método para obtener el rol del usuario
  getUserRole(): string {
    return this.role; // Retorna el rol del usuario
  }
}
