import { Component, OnInit } from '@angular/core';
import { ScriptManagerService } from 'src/app/script-manager.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private scriptManager: ScriptManagerService) { }

  ngOnInit(): void {
    this.scriptManager.cargarScript(['accordion']);
  }

}
