import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.css'],
})
export class MisDatosComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router
  ) /* private usuario: DatosService, */
  {}
  //Datos obtenidos desde el HTML
  actualizarUsuario = {
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    genero: '',
    departamento: '',
    ciudad: '',
    direccion: '',
    tipoVivienda1: '',
    tipoVivienda2: '',
    tipoVivienda3: '',
    telefono: '',
  };

  ngOnInit(): void {}

  actualizar() {
    this.auth.registroUsuario(this.actualizarUsuario).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/Ingreso']);
        window.alert('Registro exito!!! Ya puedes acceder a nustra aplicación');
      },
      (err) => {
        console.log(err);
        window.alert('Tus datos están el sistema');
      }
    );
  }
}
