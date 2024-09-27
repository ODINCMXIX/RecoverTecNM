import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],  // Solo importa RouterOutlet aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Corrige styleUrl a styleUrls
})
export class AppComponent {
  title = 'RecoverTecNM';
}