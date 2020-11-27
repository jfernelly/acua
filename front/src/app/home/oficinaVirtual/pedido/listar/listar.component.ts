import { Component, OnInit } from '@angular/core';
/* import { ScriptManagerService } from 'src/app/script-manager.service';
 */import { PedidoService } from '../../../../service/pedido.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private pedido: PedidoService/* ,private scriptManager: ScriptManagerService */) {}
 
  lista = [];
 
  ngOnInit(): void {

    this.pedido.listarPedido().subscribe(
      (res) => {
        this.lista = res;
      },
      (err) => {
        console.log(err);
      }
    );

   /*  this.scriptManager.cargarScript(['accordion']); */
  }
  

}
