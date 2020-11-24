import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  constructor(private http: HttpClient) {}

  /* private listaUrl = 'http://localhost:3000/api/usuario/lista'; */
  private crearUrl = 'http://localhost:3000/api/usuario/';

/*   listaUsuario() {
    return this.http.get<any>(this.listaUrl);
  } */
 
  editarUsuario(usuario) {
    return this.http.put<any>(this.crearUrl, usuario);
  }

}
