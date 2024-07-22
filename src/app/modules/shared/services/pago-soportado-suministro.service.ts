import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagoSoportadoSuministroElement } from '../../pago-soportado/components/pago-soportado-suministro/pago-soportado-suministro.component';

const base_url = "http://localhost:8090/api/v1";

@Injectable({
  providedIn: 'root'
})
export class PagoSoportadoSuministroService {

  constructor(private http: HttpClient) { }
  /**
     * get all supported payments
     * @returns
     */
  getPagoSoportadoSuministro(){
    const endpoint = `${base_url}/pago-soportado-suministro`;
    return this.http.get(endpoint);
  }
  /**
   *
   * @param razonSocial
   * @returns
   */
  searchPagoSoportadoSuministro(razonSocial: any){
    const endpoint = `${base_url}/pago-soportado-suministro/search-razon-social/${razonSocial}`;
    return this.http.get(endpoint);
  }

  actualizarPagoSoportado(element: PagoSoportadoSuministroElement): Observable<any> {
    const endpoint = `${base_url}/pago-soportado-suministro/${element.id}`;
    // Suponiendo que el servidor espera recibir el objeto completo con los cambios
    return this.http.put(endpoint, element);
  }
}




