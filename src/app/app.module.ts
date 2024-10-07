import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';  // Importa las rutas
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [],  // Aquí puedes declarar tus componentes
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),  // Configura el RouterModule con las rutas
  ],
  providers: [],
  bootstrap: []  // Aquí puedes especificar el componente raíz de tu aplicación
})
export class AppModule { }
