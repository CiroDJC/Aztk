import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RemesasComponent } from './components/remesas/remesas.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { CreditoComponent } from './components/credito/credito.component';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';
import { RegistroTransaccionesComponent } from './components/registro-transacciones/registro-transacciones.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { OlvidoContrasenaComponent } from './components/olvido-contrasena/olvido-contrasena.component';
import { RegistrarClientesComponent } from './components/registrar-clientes/registrar-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RemesasComponent,
    ServiciosComponent,
    CreditoComponent,
    CuestionarioComponent,
    RegistroTransaccionesComponent,
    NavbarComponent,
    MenuComponent,
    OlvidoContrasenaComponent,
    RegistrarClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
