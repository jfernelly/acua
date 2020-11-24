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


import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AuthService } from './service/auth.service'
  

import { RegistroComponent } from './home/acceso/registro/registro.component';
import { ListarComponent } from './home/oficinaVirtual/pedido/listar/listar.component';
import { CrearComponent } from './home/oficinaVirtual/pedido/crear/crear.component';


const appRouter: Routes = [
  {path: 'Ingreso', component: LoginComponent },
  {path: 'Oficina', component: ListarComponent},
  {path: 'Pedidos', component: ListarComponent},
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
    RegistroComponent,
    ListarComponent,
    CrearComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(appRouter),
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
