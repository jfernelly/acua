import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../service/auth.service';
import { Router } from '@angular/router';
import { PedidoService } from '../../../../service/pedido.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
})
export class CrearComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router, private pedido: PedidoService) {}

  crearPedido = {
    genero: '',
    edad: '',
    caracter: '',
    aroma: '',
    favoritos: '',
    nombres: '',
    apellidos: '',
    direccion: '',
    ciudad: '',
    telefono: '',
    email: ''
  };
  ngOnInit(): void {}
  crear() {
    this.pedido.crearPedido(this.crearPedido).subscribe(
      (res) =>{
        console.log(res);
      },
      (err) => { 
        console.log(err)
      }
    );
  }
}