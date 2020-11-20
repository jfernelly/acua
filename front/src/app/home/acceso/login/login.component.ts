import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private auth: AuthService, private router: Router) {}

  //Datos obtenidos desde el HTML
  registrarUsuario = {
  
      "nombre": "",
      "apellido": "",
      "tipoDocumento": "",
      "numeroDocumento": "",
      "departamento": "",
      "ciudad": "",
      "direccion": "",
      "telefono": "",
      "correo": "",
      "pass": "",
  
  };

  ngOnInit(): void {}

  registrar() {
    this.auth.registroUsuario(this.registrarUsuario).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/Ingreso']);
        window.alert("Registro exito!!! Ya puedes acceder a nustra aplicación")
      },
      (err) => {
        console.log(err);
        window.alert("Tus datos estan el sistema")
      }
    );
  }
}