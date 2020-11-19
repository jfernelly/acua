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
import { PedidosComponent } from './home/oficinaVirtual/pedidos/pedidos.component';
import { MisDatosComponent } from './home/oficinaVirtual/mis-datos/mis-datos.component';
import { LoginComponent } from './home/acceso/login/login.component';
import { RegistroComponent } from './home/acceso/registro/registro.component';
import { FormsModule } from '@angular/forms';

const appRouter: Routes = [
  {path: 'Ingreso', component: LoginComponent },
  {path: 'Oficina', component: PedidosComponent},
  {path: 'Pedidos', component: PedidosComponent},
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
    PedidosComponent,
    MisDatosComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(appRouter),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
