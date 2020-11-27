import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  private listarUrl = 'http://localhost:3000/api/pedido/lista';
  private crearUrl = 'http://localhost:3000/api/pedido';

  listarPedido() {
    return this.http.get<any>(this.listarUrl);

  }

  crearPedido(pedido) {
    return this.http.post<any>(this.crearUrl, pedido);
  }
  editarPedido(pedido) {
    return this.http.put<any>(this.crearUrl, pedido);
  }

  eliminarPedido(pedido) {
    const _id = pedido._id;
    const url = `${this.crearUrl}/${_id}`;
    return this.http.delete<any>(url);
  }

}
