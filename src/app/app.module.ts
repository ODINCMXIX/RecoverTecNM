import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';  // Importa las rutas
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),  // Configura el RouterModule con las rutas
    FormsModule,
    ReactiveFormsModule,
    LoginComponent
  ],
  providers: [],
  bootstrap: [],
  
})
export class AppModule { }