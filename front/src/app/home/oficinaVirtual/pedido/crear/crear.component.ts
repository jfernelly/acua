import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../service/auth.service';
import { Router } from '@angular/router';
import { PedidoService } from '../../../../service/pedido.service';
import Swal from 'sweetalert2'; //https://sweetalert2.github.io/

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
        this.limpiaForm();
        Swal.fire({
          icon: 'success',
          title: `Se envió tu formulación. Pronto nos contactaremos contigo!`,
          //showConfirmButton: false,
          confirmButtonText: `Ok!`,
        });
        setTimeout(()=>{
          this.router.navigate(['/listarPedidos'])
        },2500);

      },
      (err) => { 
        console.log(err)
      }
    );
  }

  limpiaForm() {
    this.crearPedido = {
      "genero": "",
      "edad": "",
      "caracter": "",
      "aroma": "",
      "favoritos": "",
      "nombres": "",
      "apellidos": "",
      "direccion": "",
      "ciudad": "",
      "telefono": "",
      "email": "",
    };
  }
}