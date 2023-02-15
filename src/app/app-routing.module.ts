import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditoComponent } from './components/credito/credito.component';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OlvidoContrasenaComponent } from './components/olvido-contrasena/olvido-contrasena.component';
import { RegistrarClientesComponent } from './components/registrar-clientes/registrar-clientes.component';
import { RegistroTransaccionesComponent } from './components/registro-transacciones/registro-transacciones.component';
import { RemesasComponent } from './components/remesas/remesas.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registrar-clientes', component: RegistrarClientesComponent},
  {path: 'olvido-contrasena', component:OlvidoContrasenaComponent},
  {path: 'home', component: HomeComponent},
  {path: 'remesas', component: RemesasComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'credito', component: CreditoComponent},
  {path: 'cuestionario', component: CuestionarioComponent},
  {path: 'registro-transacciones', component: RegistroTransaccionesComponent},
  {path:'**',redirectTo:'login',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
