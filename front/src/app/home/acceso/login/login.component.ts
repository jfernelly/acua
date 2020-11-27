import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; //https://sweetalert2.github.io/





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

  loguear = {
    "correo": '',
    "pass": '',
  };

  ngOnInit(): void {}

  registrar() {
    if(this.registrarUsuario.nombre && this.registrarUsuario.pass && this.registrarUsuario.nombre) {
      this.auth.registroUsuario(this.registrarUsuario).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/RefreshComponent']);
          //window.alert("Registro exito!!! Ya puedes acceder a nustra aplicación");
          this.limpiaForm();            
          //https://sweetalert2.github.io/
          Swal.fire({
            icon: 'success',
            title: `Ya eres miembro de la comunidad ACUA!!!
            Ahora accede a nuestra aplicación`,
            //showConfirmButton: false,
            confirmButtonText: `Ok!`,
            
          })
        },
        (err) => {
          console.log(err);
          //https://sweetalert2.github.io/
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El correo ingresado se encuentra registrado',
            
          })
        }
      );
    }
    else{
      //https://sweetalert2.github.io/
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingresa todos los campos del regristro, estos son obligatorios',
    })
    
  }}

  login() {
    this.auth.loginUsuario(this.loguear).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.jwtToken);
        //https://sweetalert2.github.io/
        Swal.fire({
          icon: 'success',
          title: 'Se vaidaron tus credenciales',
          showConfirmButton: false,
          timer: 2500
        })
        setTimeout(()=>{
          this.router.navigate(['/listarPedidos'])
        },2500)
        
      },
      (err) => {
        console.log(err);
        //https://sweetalert2.github.io/
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Valida la información ingresada',
          
        })
      }
    );
  }

  limpiaForm(){
    this.registrarUsuario = {
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
  }
}
