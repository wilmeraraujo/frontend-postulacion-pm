import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = "http://localhost:8090/api/v1";

@Injectable({
  providedIn: 'root'
})
export class PagoSoportadoService {

  constructor(private http: HttpClient) { }

  /**
   * get all supported payments
   * @returns
   */
  getPagoSoportado(){
    const endpoint = `${base_url}/pago-soportado-factura`;
    return this.http.get(endpoint);
  }
  /**
   *
   * @param razonSocial
   * @returns
   */
  searchPagoSoportado(razonSocial: any){
    const endpoint = `${base_url}/pago-soportado-factura/search-razon-social/${razonSocial}`;
    return this.http.get(endpoint);
  }
}
