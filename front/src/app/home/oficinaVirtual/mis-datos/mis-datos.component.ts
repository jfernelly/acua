import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.css']
})
export class MisDatosComponent implements OnInit {

  constructor(
     private auth: AuthService, 
     private router: Router
    /* private usuario: DatosService, */
  ) { }
//Datos obtenidos desde el HTML
  actualizarUsuario = {
      "nombre": "",
      "lastName": "",
      "tipoDocumento": "",
      "numeroDocumento": "",
      "departamento": "",
      "ciudad": "",
      "direccion": "",
      "telefono": "",
      "correo": "",
      "pass": "",
  };

  ngOnInit(): void {
  }

  actualizar() {
    this.auth.registroUsuario(this.actualizarUsuario).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/Ingreso']);
        window.alert("Registro exito!!! Ya puedes acceder a nustra aplicación")
      },
      (err) => {
        console.log(err);
        window.alert("Tus datos están el sistema")
      }
    );
  }

}



  

  
  
  

 


  