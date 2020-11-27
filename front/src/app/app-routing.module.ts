import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app/guard/auth.guard';
import { LoginComponent } from './home/acceso/login/login.component';
import { CrearComponent } from './home/oficinaVirtual/pedido/crear/crear.component';
import { ListarComponent } from './home/oficinaVirtual/pedido/listar/listar.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'listarPedidos',
    component: ListarComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'crearPedidos',
    component: CrearComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
