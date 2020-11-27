import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { InfoComponent } from './home/info/info.component';
import { MenuComponent } from './home/oficinaVirtual/menu/menu.component';
import { TicketsComponent } from './home/oficinaVirtual/tickets/tickets.component';
import { MisDatosComponent } from './home/oficinaVirtual/mis-datos/mis-datos.component';
import { LoginComponent } from './home/acceso/login/login.component';


import { FormsModule,  ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthService } from './service/auth.service'
import { TokenInterceptorService } from './service/token-interceptor.service';
import { PedidoService } from './service/pedido.service';
import { AuthGuard } from '../app/guard/auth.guard'; //Se importa como un servicio


import { ListarComponent } from './home/oficinaVirtual/pedido/listar/listar.component';
import { CrearComponent } from './home/oficinaVirtual/pedido/crear/crear.component';


const appRouter: Routes = [
  {path: 'Ingreso', component: LoginComponent },
  {path: 'Oficina', component: ListarComponent},
  {path: 'listarPedidos', component: ListarComponent},
  {path: 'crearPedidos', component: CrearComponent},
  {path: 'Datos', component: MisDatosComponent},
  {path: 'Tickets', component: TicketsComponent},
  {path: '', component: InfoComponent  , pathMatch: 'full'}
]     

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    InfoComponent,
    FooterComponent,
    MenuComponent,
    TicketsComponent,
    MisDatosComponent,
    LoginComponent,
    ListarComponent,
    CrearComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(appRouter),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    PedidoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
