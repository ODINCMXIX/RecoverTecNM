import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';  // Importa las rutas
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [],  // Aquí puedes declarar tus componentes
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),  // Configura el RouterModule con las rutas
    FormsModule,
    ReactiveFormsModule,
    LoginComponent
  ],
  providers: [],
  bootstrap: [],
  
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),  // Configura el RouterModule con las rutas
  ],
  providers: [],
  bootstrap: []  // Aquí puedes especificar el componente raíz de tu aplicación
})
export class AppModule { }
