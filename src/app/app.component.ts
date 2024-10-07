import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';  // Importa el componente
import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from './components/header/header.component';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,  // Especifica que el componente es independiente
  imports: [RouterOutlet, HeaderComponent, SidenavComponent, BodyComponent],  // Asegúrate de importar el SidenavComponent aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RecoverTecNM';

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void{
  this.screenWidth = data.screenWidth;
  this.isSideNavCollapsed = data.collapsed;
  }
}
