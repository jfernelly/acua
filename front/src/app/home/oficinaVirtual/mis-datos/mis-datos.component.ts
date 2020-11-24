import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { DatosService } from '../../../service/datos.service';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.css']
})
export class MisDatosComponent implements OnInit {

  constructor(
     private auth: AuthService,
    private router: Router,
    private tablero: DatosService
  ) { }

  ngOnInit(): void {
  }

}
